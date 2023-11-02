import Link, { LinkProps } from 'next/link';
import * as React from 'react';

import { cn } from '@/utils/utils';

type CTALinkProps = {
	className?: string;
	children: React.ReactNode;
} & LinkProps;

function CTALink({ className, children, ...delegated }: CTALinkProps) {
	return (
		<Link
			className={cn(
				'text-theme-white bg-theme-accent rounded-md shadow-lg shadow-black px-10 text-[clamp(1.025rem,-0.875rem+3vw,2.75rem)]',
				className,
			)}
			{...delegated}
		>
			<span className="-mt-px">{children}</span>
		</Link>
	);
}

export default CTALink;
