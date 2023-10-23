import '@/app/globals.css';

import { cookies } from 'next/headers';
import { ReactNode } from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import MotionPreferencesConfig from '@/components/MotionPreferencesConfig/MotionPreferencesConfig';
import { NextUIThemeProvider } from '@/context/nextui/NextUIThemeProvider';
import Theme from '@/context/theme/ThemeContext';
import ColorThemeType from '@/types/ColorThemeType';
import { cn } from '@/utils/utils';

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
					className={cn(savedTheme)}
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
								<main>{children}</main>
								<Footer className="wrapper" />
							</div>
						</NextUIThemeProvider>
					</body>
				</html>
			</Theme>
		</MotionPreferencesConfig>
	);
}

export default RootLayout;
