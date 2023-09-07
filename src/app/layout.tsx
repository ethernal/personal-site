import '@/app/globals.css';

import { Spline_Sans_Mono, Work_Sans } from 'next/font/google';
import { cookies } from 'next/headers';
import React, { ReactNode } from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import MotionPreferencesConfig from '@/components/MotionPreferencesConfig/MotionPreferencesConfig';
import { DARK_TOKENS, LIGHT_TOKENS } from '@/constants/constants';
import ColorThemeType from '@/types/ColorThemeType';

function RootLayout({ children }: { children: ReactNode }) {
	const savedTheme = cookies().get('theme');
	const theme: ColorThemeType = (savedTheme?.value ??
		'light') as ColorThemeType;

	return (
		<MotionPreferencesConfig>
			<html
				lang="en"
				data-color-theme={theme}
				style={theme === 'light' ? LIGHT_TOKENS : DARK_TOKENS}
			>
				<body className="animation-disable">
					<div className="wrapper">
						<Header initialTheme={theme} />
						<main>{children}</main>
						<Footer className="wrapper" />
					</div>
				</body>
			</html>
		</MotionPreferencesConfig>
	);
}

export default RootLayout;
