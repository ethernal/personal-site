import format from 'date-fns/format';
import Link from 'next/link';
import React from 'react';

import Logo from '@/components/Logo';
import { SITE_PUBLISHED_YEAR_STRING, SOCIAL_X_HANDLE } from '@/constants/constants';
import { cn } from '@/utils/utils';

type FooterProps = {
	className?: string;
};

function Footer({ className }: FooterProps) {
	const currentYear = format(new Date(), 'yyyy');

	return (
		<div
			className={cn(
				'bg-theme-light-background-secondary-muted dark:bg-theme-dark-background-secondary-muted pt-8 text-theme-light-text-dark dark:text-theme-dark-text-light',
				className,
			)}
		>
			<div
				className={
					'md:justify-between max-w-content-width relative flex w-full flex-row justify-between gap-16 pb-6 max-md:gap-8 max-xs:flex-col md:flex-row md:items-baseline'
				}
			>
				<div className="flex flex-col">
					<Logo className={'text-xl hover:text-theme-accent'} />
					<ul className={'list-none p-0 first:mt-6 last:mb-0'}>
						<li className="mb-2">
							<p className={'mb-0 mt-7 text-xs font-light text-decoration'}>
								Inspired by {` `}
								<Link
									href="https://www.joshwcomeau.com/"
									className={
										'font-semibold text-theme-light-text-muted dark:text-theme-dark-text-light no-underline hover:underline hover:decoration-2 hover:underline-offset-[0.125em]'
									}
								>
									Josh W. Comeau
								</Link>
								.
							</p>
						</li>
						<li className="mb-2">
							<p className={'mb-0 mt-4 text-sm text-decoration'}>
								Created by{' '}
								<Link
									href="/"
									className={
										'font-semibold text-theme-light-text-dark dark:text-theme-dark-text-muted no-underline hover:underline hover:decoration-2 hover:underline-offset-[0.125em]'
									}
								>
									Sebastian Pieczyński
								</Link>{' '}
								&copy;{' '}
								{SITE_PUBLISHED_YEAR_STRING === currentYear ? '' : '2023-'}
								{currentYear}.{' '}
							</p>
						</li>
					</ul>
				</div>

				<nav>
					<h2 className={'mt-0'}>Links</h2>
					<ul className={'mt-6 list-none p-0 last:mb-0'}>
						<li className="mb-2">
							<Link
								className="text-base no-underline hover:underline hover:decoration-2 hover:underline-offset-[0.125em]"
								href="/terms"
							>
								Terms of Use
							</Link>
						</li>
						<li className="mb-2">
							<Link
								className="text-base no-underline hover:underline hover:decoration-2 hover:underline-offset-[0.125em]"
								href="/privacy"
							>
								Privacy Policy
							</Link>
						</li>
						<li className="mb-2">
							<Link
								className="text-base no-underline hover:underline hover:decoration-2 hover:underline-offset-[0.125em]"
								href={`https://twitter.com/${SOCIAL_X_HANDLE}`}
								target="_blank"
							>
								Twitter / X
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default Footer;
