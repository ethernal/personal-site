'use client';

import * as React from 'react';

import { cn } from '@/utils/utils';
import {
	autoUpdate,
	flip,
	FloatingPortal,
	offset,
	shift,
	useDismiss,
	useFloating,
	useFocus,
	useHover,
	useInteractions,
	useMergeRefs,
	useRole,
} from '@floating-ui/react';

import type { Placement } from '@floating-ui/react';
interface TooltipOptions {
	initialOpen?: boolean;
	placement?: Placement;
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
}

export function useTooltip({
	initialOpen = false,
	placement = 'top',
	open: controlledOpen,
	onOpenChange: setControlledOpen,
}: TooltipOptions = {}) {
	const [uncontrolledOpen, setUncontrolledOpen] = React.useState(initialOpen);

	const open = controlledOpen ?? uncontrolledOpen;
	const setOpen = setControlledOpen ?? setUncontrolledOpen;

	const data = useFloating({
		placement,
		open,
		onOpenChange: setOpen,
		whileElementsMounted: autoUpdate,
		middleware: [
			offset(5),
			flip({
				crossAxis: placement.includes('-'),
				fallbackAxisSideDirection: 'start',
				padding: 5,
			}),
			shift({ padding: 5 }),
		],
	});

	const context = data.context;

	const hover = useHover(context, {
		move: false,
		enabled: controlledOpen == null,
	});
	const focus = useFocus(context, {
		enabled: controlledOpen == null,
	});
	const dismiss = useDismiss(context);
	const role = useRole(context, { role: 'tooltip' });

	const interactions = useInteractions([hover, focus, dismiss, role]);

	return React.useMemo(
		() => ({
			open,
			setOpen,
			...interactions,
			...data,
		}),
		[open, setOpen, interactions, data],
	);
}

type ContextType = ReturnType<typeof useTooltip> | null;

const TooltipContext = React.createContext<ContextType>(null);

export const useTooltipContext = () => {
	const context = React.useContext(TooltipContext);

	if (context == null) {
		throw new Error('Tooltip components must be wrapped in <Tooltip />');
	}

	return context;
};

export function Tooltip({
	children,
	...options
}: { children: React.ReactNode } & TooltipOptions) {
	// This can accept any props as options, e.g. `placement`,
	// or other positioning options.
	const tooltip = useTooltip(options);
	return (
		<TooltipContext.Provider value={tooltip}>
			{children}
		</TooltipContext.Provider>
	);
}

export const TooltipTrigger = React.forwardRef<
	HTMLElement,
	React.HTMLProps<HTMLElement> & { asChild?: boolean }
>(function TooltipTrigger({ children, asChild = false, ...props }, propRef) {
	const context = useTooltipContext();
	const childrenRef = (children as any).ref;
	const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);

	// `asChild` allows the user to pass any element as the anchor
	if (asChild && React.isValidElement(children)) {
		return React.cloneElement(
			children,
			context.getReferenceProps({
				ref,
				...props,
				...children.props,
				'data-state': context.open ? 'open' : 'closed',
			}),
		);
	}

	return (
		<span
			ref={ref}
			// The user can style the trigger based on the state
			data-state={context.open ? 'open' : 'closed'}
			{...context.getReferenceProps(props)}
		>
			{children}
		</span>
	);
});

export const TooltipContent = React.forwardRef<
	HTMLDivElement,
	React.HTMLProps<HTMLDivElement>
>(function TooltipContent({ style, ...props }, propRef) {
	const context = useTooltipContext();
	const ref = useMergeRefs([context.refs.setFloating, propRef]);

	if (!context.open) return null;

	return (
		<FloatingPortal>
			<div
				ref={ref}
				style={{
					...context.floatingStyles,
					...style,
				}}
				{...context.getFloatingProps(props)}
			/>
		</FloatingPortal>
	);
});

type TooltipMessageProps = {
	content: string;
	className?: string;
	children: React.ReactNode;
} & TooltipOptions;

function TooltipMessage({
	content,
	children,
	className,
	...delegated
}: TooltipMessageProps) {
	return (
		<Tooltip {...delegated}>
			<TooltipTrigger className="underline decoration-wavy decoration-theme-black dark:decoration-theme-glass">
				{content}
			</TooltipTrigger>
			<TooltipContent
				className={cn(
					'flow-root max-w-[40vw] bg-white rounded-lg p-2 opacity-95  border-2 border-white backdrop-blur-md [&_p]:text-sm [&_p]:mb-0 [&_p]:align-middle [&>img]:pe-2 [&>img]:float-left shadow-lg dark:bg-theme-black dark:text-theme-white dark:border-theme-olive',
					className,
				)}
			>
				{children}
			</TooltipContent>
		</Tooltip>
	);
}

export default TooltipMessage;
