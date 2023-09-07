import React from 'react';
import Link from 'next/link';

import { SITE_TITLE } from '@/constants/constants';
import { cn } from '@/utils/utils';

import styles from './Logo.module.css';

function Logo({ mobileAlignment = 'left', className }) {
	return (
		<Link
			href="/"
			className={cn(className, styles.wrapper)}
			data-mobile-alignment={mobileAlignment}
		>
			{SITE_TITLE}
		</Link>
	);
}

export default Logo;
