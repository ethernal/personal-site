import Link from 'next/link';
import { CSSProperties } from 'react';

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
				'no-underline block list-none text-xl font-semibold font-sans tracking-tight transition-all motion-reduce:transition-none motion-reduce:hover:transform-none md:text-2xl md:tracking-widest duration-150',
			)}
		>
			{SITE_TITLE}
		</Link>
	);
}

export default Logo;
