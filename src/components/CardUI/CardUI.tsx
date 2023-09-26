import * as React from 'react';

import { cn } from '@/utils/utils';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react';

type CardUIProps = {
	className?: string;
	children?: React.ReactNode;
} & Prettify<React.ComponentProps<typeof Card>>;

type CardUIHeaderProps = {
	className?: string;
	children?: React.ReactNode;
} & Prettify<React.ComponentProps<typeof CardHeader>>;

type CardUIBodyProps = {
	className?: string;
	children?: React.ReactNode;
} & Prettify<React.ComponentProps<typeof CardBody>>;

type CardUIFooterProps = {
	className?: string;
	children?: React.ReactNode;
} & Prettify<React.ComponentProps<typeof CardFooter>>;

const CardUI = React.memo(
	React.forwardRef<typeof Card, CardUIProps>(function CardUI(
		{ className = '', children, ...delegated }: CardUIProps,
		ref: React.RefObject<HTMLDivElement | null> | undefined,
	) {
		return (
			<Card
				className={cn(
					'py-4 min-w-[clamp(8rem,15rem,min(20rem,100%))] max-w-full flex-1',
					className,
				)}
				ref={ref}
				{...delegated}
			>
				{children}
			</Card>
		);
	}),
);

const CardUIHeader = React.memo(
	React.forwardRef<typeof CardHeader, CardUIHeaderProps>(function CardUIHeader(
		{ className = '', children, ...delegated }: CardUIHeaderProps,
		ref,
	) {
		return (
			<CardHeader
				ref={ref}
				className={cn('pb-0 pt-2 px-4 flex-col items-start', className)}
				{...delegated}
			>
				{children}
			</CardHeader>
		);
	}),
);

const CardUIBody = React.memo(
	React.forwardRef<typeof CardBody, CardUIBodyProps>(function CardUIBody(
		{ className = '', children, ...delegated }: CardUIBodyProps,
		ref,
	) {
		return (
			<CardBody
				ref={ref}
				className={cn(
					'overflow-visible py-2 flex flex-row gap-4 items-center justify-center',
					className,
				)}
				{...delegated}
			>
				{children}
			</CardBody>
		);
	}),
);

const CardUIFooter = React.memo(
	React.forwardRef<typeof CardFooter, CardUIFooterProps>(function CardUIFooter(
		{ className = '', children, ...delegated }: CardUIFooterProps,
		ref,
	) {
		return (
			<CardFooter ref={ref} className={cn(className)} {...delegated}>
				{children}
			</CardFooter>
		);
	}),
);

export { CardUIHeader, CardUIBody, CardUIFooter };

export default CardUI;
