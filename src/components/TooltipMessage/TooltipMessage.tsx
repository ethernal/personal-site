'use client';
import React, { ReactNode } from 'react';

import { useThemeContext } from '@/context/theme/ThemeContext';
import { cn } from '@/utils/utils';

// import { Button, Popover, PopoverContent, PopoverTrigger, Tooltip } from '@nextui-org/react';

type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

type TooltipMessageProps = {
	position: TooltipPosition;
	content: string;
	children: ReactNode;
};

function TooltipMessage({
	position = 'top',
	content,
	children,
	...delegated
}: TooltipMessageProps) {
	const { theme } = useThemeContext();

	return (
		// <Tooltip showArrow={true} content={content} {...delegated}>
		// 	{children}
		// </Tooltip>

		<span className="relative group cursor-help">
			<span className="decoration-wavy underline decoration-theme-black/30">
				{content}
			</span>
			<div
				className={cn(
					'absolute hidden z-10 invisible opacity-0 group-hover:block group-hover:visible group-hover:opacity-95 group-focus:block  group-focus:visible group-focus:opacity-95 rounded-md py-2 px-2 h-auto min-w-fit transition-opacity delay-200 ease-in-out border border-white bg-theme-glass backdrop-blur-md w-44 max-w-max shadow-lg',
					{
						'bg-gray-50 text-current': theme === 'light',
						'bg-gray-900 text-white': theme === 'dark',
					},
					{
						'bottom-full left-1/2 transform -translate-x-1/2 -translate-y-1':
							position === 'top',
						'top-full left-1/2 transform -translate-x-1/2 translate-y-1':
							position === 'bottom',
						'left-full top-1/2 transform translate-x-1 -translate-y-1/2':
							position === 'right',
						'right-full top-1/2 transform -translate-x-1 -translate-y-1/2':
							position === 'left',
					},
				)}
				role="tooltip"
			>
				<span className="flex flex-col gap-2 m-0 [&>p]:text-small [&>*]:m-0 [&>img]:rounded-sm [&>figure]:rounded-sm">
					{children}
				</span>
			</div>
		</span>
	);
}

export default TooltipMessage;
