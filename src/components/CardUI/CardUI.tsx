import * as React from 'react';

import { cn } from '@/utils/utils';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react';

type CardUIProps = {
	className?: string;
	children?: React.ReactNode;
} & Prettify<React.ComponentProps<typeof Card>>;

type CardHeaderProps = {
	className?: string;
	children?: React.ReactNode;
} & Prettify<React.ComponentProps<typeof CardHeader>>;

type CardBodyProps = {
	className?: string;
	children?: React.ReactNode;
} & Prettify<React.ComponentProps<typeof CardBody>>;

type CardFooterProps = {
	className?: string;
	children?: React.ReactNode;
} & Prettify<React.ComponentProps<typeof CardFooter>>;

function CardUI(
	{ className = '', children, ...delegated }: CardUIProps,
	ref: React.RefObject<HTMLDivElement | null> | undefined,
) {
	return (
		<Card
			className={cn('py-4 max-w-[15rem]', className)}
			ref={ref}
			{...delegated}
		>
			{children}
		</Card>
	);
}

function CardUIHeader({
	className = '',
	children,
	...delegated
}: CardHeaderProps) {
	return (
		<CardHeader
			className={cn('pb-0 pt-2 px-4 flex-col items-start', className)}
			{...delegated}
		>
			{children}
		</CardHeader>
	);
}

function CardUIBody({ className = '', children, ...delegated }: CardBodyProps) {
	return (
		<CardBody
			className={cn(
				'overflow-visible py-2 flex flex-row gap-4 items-center justify-center',
				className,
			)}
			{...delegated}
		>
			{children}
		</CardBody>
	);
}

function CardUIFooter({
	className = '',
	children,
	...delegated
}: CardFooterProps) {
	return (
		<CardFooter className={cn(className)} {...delegated}>
			{children}
		</CardFooter>
	);
}

CardUI.Header = CardUIHeader;
CardUI.Body = CardUIBody;
CardUI.Footer = CardUIFooter;

export { CardUIHeader, CardUIBody, CardUIFooter };

export default React.forwardRef<HTMLDivElement, CardUIProps>(CardUI);
