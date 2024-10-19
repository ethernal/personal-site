import format from 'date-fns/format';
import Link from 'next/link';
import {
	RiGithubFill as GitHubIcon,
	RiTwitterXFill as TwitterXIcon,
} from 'react-icons/ri';

import Logo from '@/components/Logo';
import {
	SITE_PUBLISHED_YEAR_STRING,
	SOCIAL_GITHUB_HANDLE,
	SOCIAL_X_HANDLE,
} from '@/constants/constants';
import { cn } from '@/utils/utils';

import NewTabIcon from '../NewTabIcon';

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
							<p className={'mb-0 mt-4 text-sm text-decoration'}>
								Created with ❤️ by{' '}
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
								href="/terms-of-use"
							>
								Terms of Use
							</Link>
						</li>
						<li className="mb-2">
							<Link
								className="text-base no-underline hover:underline hover:decoration-2 hover:underline-offset-[0.125em]"
								href="/privacy-policy"
							>
								Privacy Policy
							</Link>
						</li>
						<li className="mb-2">
							<Link
								className="text-base no-underline hover:underline hover:decoration-2 hover:underline-offset-[0.125em]"
								href="/cookie-policy"
							>
								Cookie Policy
							</Link>
						</li>
						<li className="mb-2">
							<Link
								className="text-base no-underline hover:underline hover:decoration-2 hover:underline-offset-[0.125em] flex gap-2 items-center"
								href={`https://github.com/${SOCIAL_GITHUB_HANDLE}`}
								target="_blank"
								aria-description="Link to Sebastian's GitHub profile that opens in new tab"
							>
								<GitHubIcon aria-description="github icon" />{' '}
								{SOCIAL_GITHUB_HANDLE} <NewTabIcon />
							</Link>
						</li>
						<li className="mb-2">
							<Link
								className="text-base no-underline hover:underline hover:decoration-2 hover:underline-offset-[0.125em] flex gap-2 items-center"
								href={`https://twitter.com/${SOCIAL_X_HANDLE}`}
								target="_blank"
								aria-description="Link to Sebastian's X / Twitter profile that opens in new tab"
							>
								<TwitterXIcon aria-description="twitter x icon" /> @spieczynski{' '}
								<NewTabIcon />
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default Footer;
