import clsx from 'clsx';
import React, { ReactNode } from 'react';

import styles from './VisuallyHidden.module.css';

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
		<Element className={clsx(styles.wrapper, className)} {...delegated}>
			{children}
		</Element>
	);
}

export default VisuallyHidden;
