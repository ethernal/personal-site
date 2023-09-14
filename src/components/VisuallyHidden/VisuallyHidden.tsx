import clsx from 'clsx';
import React, { ReactNode } from 'react';

export type VisuallyHiddenProps = {
	as?: keyof JSX.IntrinsicElements;
	className?: string;
	children: ReactNode;
};

function VisuallyHidden({
	as: Element = 'span',
	className,
	children,
	...delegated
}: VisuallyHiddenProps) {
	return (
		<Element
			className={clsx(
				className,
				'absolute overflow-hidden [clip-path: circle(0%)] h-px w-px -m-px p-0 border-none',
			)}
			{...delegated}
		>
			{children}
		</Element>
	);
}

export default VisuallyHidden;
