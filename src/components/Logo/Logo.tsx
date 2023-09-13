import Link from 'next/link';
import React, { CSSProperties } from 'react';

import { SITE_TITLE } from '@/constants/constants';
import { cn } from '@/utils/utils';

type LogoProps = {
	className?: CSSProperties | string;
};

function Logo({ className }: LogoProps) {
	return (
		<Link
			href="/"
			className={cn(
				className,
				'no-underline block list-none text-xl font-semibold tracking-tight transition-all motion-reduce:transition-none motion-reduce:hover:transform-none max-md:text-2xl hover:font-black hover:scale-105 hover:duration-100',
			)}
		>
			{SITE_TITLE}
		</Link>
	);
}

export default Logo;
