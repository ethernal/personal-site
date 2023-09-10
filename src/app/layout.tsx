import '@/app/globals.css';

import { cookies } from 'next/headers';
import React, { ReactNode } from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import MotionPreferencesConfig from '@/components/MotionPreferencesConfig/MotionPreferencesConfig';
import { DARK_TOKENS, LIGHT_TOKENS } from '@/constants/constants';
import Theme from '@/context/theme/ThemeContext';
import ColorThemeType from '@/types/ColorThemeType';

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
					style={savedTheme === 'light' ? LIGHT_TOKENS : DARK_TOKENS}
				>
					<body>
						<div className="w-full">
							{/*
							max-width: var(--page-wrapper-max-width);
  margin-inline: auto;
							*/}
							<Header className="max-w-[var(--page-wrapper-max-width)] mx-auto" />
							<main>{children}</main>
							<Footer className="wrapper" />
						</div>
					</body>
				</html>
			</Theme>
		</MotionPreferencesConfig>
	);
}

export default RootLayout;
