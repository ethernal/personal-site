import * as React from 'react';

import { cn } from '@/utils/utils';
import { Button, Link } from '@nextui-org/react';

function CTAButton({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) {
	return (
		<Button
			as={Link}
			className={cn(
				'text-theme-white bg-theme-accent rounded-md shadow-lg shadow-black px-10 text-[clamp(1.025rem,-0.875rem+3vw,2.75rem)]',
				className,
			)}
			href="#"
			variant="flat"
		>
			<span className="-mt-px">{children}</span>
		</Button>
	);
}

export default CTAButton;
