import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./content/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
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
			colors: {
				'primary-color': 'var(--primary-color)',
				'secondary-color': 'var(--secondary-color)',
				'decoration-color': 'var(--decoration-color)',
				'background-color': 'var(--background-color)',
				'text-color': 'var(--text-color)',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [],
};
export default config
