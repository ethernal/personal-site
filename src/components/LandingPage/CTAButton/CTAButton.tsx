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
				'text-theme-white bg-theme-accent rounded-md shadow-2xl shadow-black px-10 text-[clamp(0.925rem,-0.875rem+3vw,1.75rem)]',
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
