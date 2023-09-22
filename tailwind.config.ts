import { nextui } from '@nextui-org/react';

import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./content/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}', // for nextui
	],
	darkMode: 'class',
	theme: {
		// colors: {
		// 	green: {
		// 		50: '#F3F9F0',
		// 		100: '#EAF5E6',
		// 		200: '#D5EACC',
		// 		300: '#BDDFAF',
		// 		400: '#A3D18F',
		// 		500: '#83C269',
		// 		600: '#6AB54A',
		// 		700: '#5B9C3F',
		// 		800: '#4C8335',
		// 		900: '#375E26',
		// 		950: '#243E19',
		// 	},
		// },
		extend: {
			spacing: {
				'viewport-padding': 'var(--page-wrapper-padding)',
				'content-width': 'var(--content-width)',
			},
			theme: {
				aspectRatio: {
					cinema: 21 / 9,
					ultraWide: 21 / 9,
					dualScreen: 32 / 9,
					superUltraWide: 32 / 9,
				},
			},
			screens: {
				xxs: '240px',
				xs: '480px',
			},
			colors: {
				'primary-color': 'var(--primary-color)',
				'secondary-color': 'var(--secondary-color)',
				decoration: 'var(--decoration-color)',
				'background-color': 'var(--background-color)',
				'text-color': 'var(--text-color)',
				brand: 'var(--brand-color)',
				'theme-white': 'var(--color-theme-white)',
				'theme-olive': 'hsla(95, 85%, 25%, 0.1)',
				'theme-black': 'var(--color-theme-black)',
				'theme-glass': 'var(--color-theme-glass)',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
		animation: {
			'spin-3s': 'spin 3s linear infinite',
			'spin-2s': 'spin 2s linear infinite',
		},
	},
	plugins: [nextui()],
};
export default config;
