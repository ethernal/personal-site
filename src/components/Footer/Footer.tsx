import format from 'date-fns/format';
import Link from 'next/link';
import React from 'react';

import Logo from '@/components/Logo';
import { SITE_PUBLISHED_YEAR_STRING, SOCIAL_X_HANDLE } from '@/constants/constants';

// import styles from './Footer.module.css';

type FooterProps = {
	className?: string;
};

function Footer({ className }: FooterProps) {
	const currentYear = format(new Date(), 'yyyy');

	return (
		<div className={className}>
			<div
				className={
					'md:flex-row md:justify-between md:items-baseline max-md:gap-8 relative flex justify-between flex-row gap-16 w-full max-w-content-width pb-12 max-xs:flex-col'
				}
			>
				<div className="flex flex-col">
					<Logo className={'text-xl'} />
					<ul className={'mt-6 list-none p-0 last:mb-0'}>
						<li className="mb-2">
							<p className={'mt-0 mb-0 text-sm text-decoration'}>
								Created by{' '}
								<Link
									href="/"
									className={
										'text-slate-900 no-underline font-semibold hover:underline hover:underline-offset-[0.125em] hover:decoration-2'
									}
								>
									Sebastian Pieczyński
								</Link>{' '}
								&copy;{' '}
								{SITE_PUBLISHED_YEAR_STRING === currentYear ? '' : '2023-'}
								{currentYear}.{' '}
							</p>
						</li>
						<li className="mb-2">
							<p className={'mt-0 mb-0 text-sm text-decoration font-light'}>
								Inspired by {` `}
								<a
									href="https://www.joshwcomeau.com/"
									className={
										'text-slate-900 font-semibold no-underline hover:underline hover:underline-offset-[0.125em] hover:decoration-2'
									}
								>
									Josh W. Comeau
								</a>
								.
							</p>
						</li>
					</ul>
				</div>

				<nav>
					<h2 className={'mt-0 text-xl'}>Links</h2>
					<ul className={'mt-6 list-none p-0 last:mb-0'}>
						<li className="mb-2">
							<Link className="no-underline text-base" href="/terms">
								Terms of Use
							</Link>
						</li>
						<li className="mb-2">
							<Link className="no-underline text-base" href="/privacy">
								Privacy Policy
							</Link>
						</li>
						<li className="mb-2">
							<a
								className="no-underline text-base"
								href={`https://twitter.com/${SOCIAL_X_HANDLE}`}
							>
								Twitter / X
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default Footer;
