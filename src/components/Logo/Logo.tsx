import Link from 'next/link';
import React, { CSSProperties } from 'react';

import { SITE_TITLE } from '@/constants/constants';
import { cn } from '@/utils/utils';

import styles from './Logo.module.css';

type LogoProps = {
	className?: CSSProperties | string;
};

function Logo({ className }: LogoProps) {
	return (
		<Link href="/" className={cn(className, styles.wrapper)}>
			{SITE_TITLE}
		</Link>
	);
}

export default Logo;
