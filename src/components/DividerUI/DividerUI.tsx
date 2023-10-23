'use client';

import * as React from 'react';

import { cn } from '@/utils/utils';
import { Divider, DividerProps } from '@nextui-org/react';

function DividerUI(props: DividerProps) {
	const { className, ...delegated } = props;
	return (
		<Divider
			className={cn('bg-theme-accent-muted dark:py-px', className)}
			{...delegated}
		/>
	);
}

export default DividerUI;
