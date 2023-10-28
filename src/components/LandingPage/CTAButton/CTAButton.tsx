import * as React from 'react';

import { cn } from '@/utils/utils';
import { Button, ButtonProps } from '@nextui-org/react';

type CTAButtonProps = {
	className?: string;
	children: React.ReactNode;
} & ButtonProps;

function CTAButton({ className, children, ...delegated }: CTAButtonProps) {
	return (
		<Button
			className={cn(
				'text-theme-white bg-theme-accent rounded-md shadow-lg shadow-black px-10 text-[clamp(1.025rem,-0.875rem+3vw,2.75rem)]',
				className,
			)}
			variant="flat"
			{...delegated}
		>
			<span className="-mt-px">{children}</span>
		</Button>
	);
}

export default CTAButton;
