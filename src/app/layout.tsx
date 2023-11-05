import 'react-toastify/dist/ReactToastify.css';
import '@/app/globals.css';

import {
	Sansita as HeadingFont,
	Source_Code_Pro as MonoFont,
	Source_Sans_3 as BodyFont,
} from 'next/font/google';
import { cookies } from 'next/headers';
import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';

import CookiePolicyBanner from '@/components/CookiePolicyBanner';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import MotionPreferencesConfig from '@/components/MotionPreferencesConfig/MotionPreferencesConfig';
import { NextUIThemeProvider } from '@/context/nextui/NextUIThemeProvider';
import Theme from '@/context/theme/ThemeContext';
import ColorThemeType from '@/types/ColorThemeType';
import { cn } from '@/utils/utils';

// If loading a variable font, you don't need to specify the font weight

const headingFont = HeadingFont({
	weight: ['400', '700'],
	variable: '--font-heading',
	subsets: ['latin'],
	display: 'swap',
});

const bodyFont = BodyFont({
	weight: ['400', '600'],
	variable: '--font-body',
	subsets: ['latin'],
	display: 'swap',
});

const monoFont = MonoFont({
	weight: ['400', '600'],
	variable: '--font-mono',
	subsets: ['latin'],
	display: 'swap',
});

function RootLayout({ children }: { children: ReactNode }) {
	const savedThemeCookie = cookies().get('theme');
	const savedTheme: ColorThemeType = (savedThemeCookie?.value ??
		'light') as ColorThemeType;

	return (
		<MotionPreferencesConfig>
			<Theme initialTheme={savedTheme}>
				<html
					lang="en"
					data-color-theme={savedTheme}
					className={cn(
						savedTheme,
						bodyFont.variable,
						headingFont.variable,
						monoFont.variable,
						bodyFont.className,
					)}
				>
					<body
						className={cn(
							`
							text-theme-light-text-black
							bg-theme-light-background-primary

							dark:bg-theme-dark-background-primary
							dark:text-theme-dark-text-light
							`,
						)}
					>
						<NextUIThemeProvider>
							<div className="w-full">
								<Header className="max-w-7xl mx-auto" />
								<main className="max-w-7xl mx-auto">{children}</main>

								<Footer className="wrapper" />
							</div>
							<CookiePolicyBanner />
							<ToastContainer
								position="bottom-right"
								autoClose={4000}
								hideProgressBar={false}
								newestOnTop
								closeOnClick
								rtl={false}
								pauseOnFocusLoss
								draggable
								pauseOnHover
								toastClassName="bg-theme-light-background-secondary dark:bg-theme-dark-background-secondary"
								progressClassName={'bg-theme-accent'}
							/>
						</NextUIThemeProvider>
					</body>
				</html>
			</Theme>
		</MotionPreferencesConfig>
	);
}

export default RootLayout;
