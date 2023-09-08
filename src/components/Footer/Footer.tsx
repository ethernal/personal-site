import format from 'date-fns/format';
import Link from 'next/link';
import React from 'react';

import Logo from '@/components/Logo';
import {
	SITE_PUBLISHED_YEAR_STRING,
	SOCIAL_X_HANDLE,
} from '@/constants/constants';

import styles from './Footer.module.css';

type FooterProps = {
	className?: string;
};

function Footer({ className }: FooterProps) {
	const currentYear = format(new Date(), 'yyyy');
	return (
		<div className={className}>
			<div className={styles.content}>
				<div>
					<Logo />
					<p className={styles.attribution}>
						Created by <Link href="/">Sebastian Pieczyński</Link> &copy;{' '}
						{SITE_PUBLISHED_YEAR_STRING === currentYear ? '' : '2023-'}
						{currentYear}.{' '}
					</p>
					<p className={styles.attribution}>
						Inspired by {` `}
						<a href="https://www.joshwcomeau.com/">Josh W. Comeau</a>.
					</p>
				</div>
				<nav>
					<h2 className={styles.linkHeading}>Links</h2>
					<ul className={styles.linkList}>
						<li>
							<Link href="/terms">Terms of Use</Link>
						</li>
						<li>
							<Link href="/privacy">Privacy Policy</Link>
						</li>
						<li>
							<a href={`https://twitter.com/${SOCIAL_X_HANDLE}`}>Twitter / X</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default Footer;
