import React from 'react';

import { cn } from '@/utils/utils';

type HorizontalItemProps = {
	as?: React.ElementType;
	className?: string;
	children: React.ReactNode;
};

function HorizontalItem({ as: Tag = 'span', className, children }: HorizontalItemProps) {
	return (
		<Tag className={cn('flex align-center items-center gap-2', className)}>
			{children}
		</Tag>
	);
}

export default HorizontalItem;
