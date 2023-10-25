import { nextui } from '@nextui-org/react';

const defaultTheme = require('tailwindcss/defaultTheme');

import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./content/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}', // for next-ui
	],
	safelist: ['h-30', 'h-28', 'w-30', 'w-28'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-heading)', ...defaultTheme.fontFamily.sans],
				serif: ['var(--font-body)', ...defaultTheme.fontFamily.serif],
				mono: ['var(--font-mono)', ...defaultTheme.fontFamily.mono],
				code: ['var(--font-mono)'],
				body: ['var(--font-body)'],
				heading: ['var(--font-heading)'],
			},
			spacing: {
				'theme-card': 'var(--theme-gap-card)',
				'theme-default': 'var(--theme-gap-card)',
				// 'viewport-padding': 'var(--page-wrapper-padding)',
				// 'content-width': 'var(--content-width)',
			},
			gap: {
				'theme-card': 'var(--theme-gap-card)',
			},
			borderRadius: {
				'theme-default': '6px',
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
				'primary-color': 'hsl(var(--primary-color) / <alpha-value>)',
				brand: 'hsl(12 85% 40% / <alpha-value>)',

				'theme-white': '#fff',
				'theme-black': '#000',
				'theme-accent': 'hsl(var(--theme-accent) / <alpha-value>)',
				'theme-accent-muted': 'hsl(var(--theme-accent) / 0.5)',
				'theme-inactive': 'hsl(0 0% 77%)',

				'theme-dark-white': 'hsl(0 0% 93% / <alpha-value>)',
				'theme-dark-black': 'hsl(229 44% 5% / <alpha-value>)',
				'theme-dark-card': 'hsl(253 43% 4% / <alpha-value>)',
				'theme-dark-secondary': 'hsl(193 43% 4% / <alpha-value>)',
				'theme-dark-ternary': 'hsl(213 43% 4% / <alpha-value>)',
				'theme-dark-text-gray': 'hsl(0 0% 77% / <alpha-value>)',
				'theme-dark-accent': 'hsl(12 83% 62% / <alpha-value>)',

				// DARK

				'theme-dark-background-primary':
					'hsl(var(--theme-dark-background-primary) / <alpha-value>)',
				'theme-dark-background-primary-muted':
					'hsl(var(--theme-dark-background-primary) / var(--theme-mute-factor))',
				'theme-dark-background-secondary':
					'hsl(var(--theme-dark-background-secondary) / <alpha-value>)',
				'theme-dark-background-secondary-muted':
					'hsl(var(--theme-dark-background-secondary) / var(--theme-mute-factor))',
				'theme-dark-background-card':
					'hsl(var(--theme-dark-background-card) / <alpha-value>)',
				'theme-dark-background-card-muted':
					'hsl(var(--theme-dark-background-card) / var(--theme-mute-factor))',

				'theme-dark-text-light':
					'hsl(var(--theme-dark-foreground-light) / <alpha-value>)',
				'theme-dark-text-light-muted':
					'hsl(var(--theme-dark-foreground-light) / var(--theme-mute-factor))',
				'theme-dark-text-dark':
					'hsl(var(--theme-dark-foreground-dark) / <alpha-value>)',
				'theme-dark-text-dark-muted':
					'hsl(var(--theme-dark-foreground-dark) / var(--theme-mute-factor))',
				'theme-dark-text-muted':
					'hsl(var(--theme-dark-foreground-light) / var(--theme-mute-factor))',

				// LIGHT

				'theme-light-text-light':
					'hsl(var(--theme-light-foreground-light) / <alpha-value>)',
				'theme-light-text-light-muted':
					'hsl(var(--theme-light-foreground-light) / var(--theme-mute-factor))',
				'theme-light-text-dark':
					'hsl(var(--theme-light-foreground-dark) / <alpha-value>)',
				'theme-light-text-dark-muted':
					'hsl(var(--theme-light-foreground-dark) / var(--theme-mute-factor))',
				'theme-light-text-muted':
					'hsl(var(--theme-light-foreground-light) / var(--theme-mute-factor))',

				'theme-light-background-primary':
					'hsl(var(--theme-light-background-primary) / <alpha-value>)',
				'theme-light-background-primary-muted':
					'hsl(var(--theme-light-background-primary) / var(--theme-mute-factor))',
				'theme-light-background-secondary':
					'hsl(var(--theme-light-background-secondary) / <alpha-value>)',
				'theme-light-background-secondary-muted':
					'hsl(var(--theme-light-background-secondary) / var(--theme-mute-factor))',
				'theme-light-background-card':
					'hsl(var(--theme-light-background-card) / <alpha-value>)',
				'theme-light-background-card-muted':
					'hsl(var(--theme-light-background-card) / var(--theme-mute-factor))',

				'theme-light-accent': 'hsl(var(--theme-accent) / <alpha-value>)',
				'theme-light-inactive':
					'hsl(var(--theme-light-inactive) / <alpha-value>)',
			},
			boxShadow: {
				low: 'var(--shadow-elevation-low)',
				medium: 'var(--shadow-elevation-medium)',
				high: 'var(--shadow-elevation-high)',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			animation: {
				'spin-3s': 'spin 3s linear infinite',
				'spin-2s': 'spin 2s linear infinite',
			},
		},
	},
	plugins: [nextui()],
};
export default config;
