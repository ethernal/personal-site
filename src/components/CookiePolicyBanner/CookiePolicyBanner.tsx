'use client';
import Cookie from 'js-cookie';
import Link from 'next/link';
import * as React from 'react';

function CookiePolicyBanner() {
	const [policyAccepted, setPolicyAccepted] = React.useState(true);
	const cookieExpirationDays = 70;

	React.useEffect(() => {
		const policyVersion = 1;
		const acceptedPolicyVersion = parseInt(
			Cookie.get('cookie-policy-version') ?? '0',
		);
		if (policyVersion === acceptedPolicyVersion) {
			setPolicyAccepted(true);
		} else {
			setPolicyAccepted(false);
		}
	}, []);

	const acceptAndDismissCookieBanner = () => {
		Cookie.set('cookie-policy-version', '1', { expires: cookieExpirationDays });
		Cookie.set(
			'cookie-policy-preferences',
			JSON.stringify({ necessary: true }),
			{ expires: cookieExpirationDays },
		);
		setPolicyAccepted(true);
	};

	return policyAccepted === false ? (
		<section className="z-50 fixed flex gap-theme-default items-center justify-between max-w-4xl p-4 mx-auto bg-theme-light-background-secondary border border-gray-200 shadow-md dark:bg-theme-dark-background-secondary left-theme-default right-theme-default bottom-16 dark:shadow-gray-900 shadow-gray-100 md:gap-x-4 dark:border-gray-700 rounded-theme-default">
			<p className="text-sm text-theme-light-text-dark dark:text-theme-dark-text-light mb-0">
				By continuing to use this site you consent to the use of cookies 🍪 in
				accordance with our <Link href="/cookie-policy">🍪 cookie policy</Link>.
				This message will display once every {cookieExpirationDays} days or when
				the policy changes.
			</p>

			<button
				className="flex items-center justify-center text-gray-700 transition-colors duration-300 rounded-full shrink-0 dark:text-gray-200 dark:hover:bg-gray-700 w-7 h-7 focus:outline-none hover:bg-gray-100"
				onClick={() => acceptAndDismissCookieBanner()}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					className="w-5 h-5"
				>
					<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
				</svg>
			</button>
		</section>
	) : null;
}

export default React.memo(CookiePolicyBanner);
