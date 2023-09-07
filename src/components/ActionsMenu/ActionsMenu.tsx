import Cookie from 'js-cookie';
import React, { CSSProperties, useState } from 'react';
import { Moon, Sun } from 'react-feather';

import VisuallyHidden from '@/components/VisuallyHidden';
import { DARK_COLORS, LIGHT_COLORS } from '@/constants/constants';
import ColorThemeType from '@/types/ColorThemeType';

type ActionsMenuProps = {
	initialTheme?: ColorThemeType;
	className?: CSSProperties | string;
	delegated?: any;
};

const ActionsMenu: React.FC<ActionsMenuProps> = ({
	initialTheme,
	className = '',
	...delegated
}) => {
	const [theme, setTheme] = useState(initialTheme ?? 'light');

	const handleThemeChange = () => {
		const nextTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(nextTheme);
		Cookie.set('theme', nextTheme, { expires: 380 });

		const root = document.documentElement;
		root.setAttribute('data-color-theme', nextTheme);

		const colors = nextTheme === 'light' ? LIGHT_COLORS : DARK_COLORS;

		Object.entries(colors).forEach(([key, value]) => {
			root.style.setProperty(key, value);
		});
	};

	return (
		<div className={`${className}`} {...delegated}>
			<button onClick={handleThemeChange}>
				{theme === 'light' ? (
					<Sun
						size="1.5em"
						style={{
							minWidth: '1.5rem',
							flexShrink: 0,
							// Optical alignment
							// transform: 'translate(2px, -2px)',
						}}
					/>
				) : (
					<Moon
						size="1.5em"
						style={{
							minWidth: '1.5rem',
							flexShrink: 0,
							// Optical alignment
							// transform: 'translate(2px, -2px)',
						}}
					/>
				)}
				<VisuallyHidden>Toggle dark / light mode</VisuallyHidden>
			</button>
		</div>
	);
};

export default ActionsMenu;
