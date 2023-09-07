import Link from 'next/link';
import React, { CSSProperties } from 'react';

import Logo from '@/components/Logo';
import { SOCIAL_X_HANDLE } from '@/constants/constants';

import DecorativeSwoops from './DecorativeSwoops';
import styles from './Footer.module.css';

type FooterProps = {
	className?: string;
};

function Footer({ className }: FooterProps) {
	return (
		<div className={className}>
			<div className={styles.content}>
				<div>
					<Logo mobileAlignment="center" />
					{/*
            NOTE: If you'd like to build your blog on top
            of this code, the license requires that you leave
            this paragraph untouched. Check out LICENSE.md
            for more information.
          */}
					<p className={styles.attribution}>
						Created by Sebastian Pieczyński. Inspired by {` `}
						<a href="https://www.joshwcomeau.com/">Josh W. Comeau</a>.
					</p>
				</div>
				<nav>
					<h2 className={styles.linkHeading}>Links</h2>
					<ul className={styles.linkList}>
						<li>
							<Link href="/rss">RSS feed</Link>
						</li>
						<li>
							<Link href="/todo">Terms of Use</Link>
						</li>
						<li>
							<Link href="/todo">Privacy Policy</Link>
						</li>
						<li>
							<a href={`https://twitter.com/${SOCIAL_X_HANDLE}`}>Twitter</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default Footer;
