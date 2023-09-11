import Cookie from 'js-cookie';
import React, { CSSProperties, useState } from 'react';
import { Moon, Sun } from 'react-feather';

import VisuallyHidden from '@/components/VisuallyHidden';
import { DARK_COLORS, LIGHT_COLORS } from '@/constants/constants';
import { useThemeContext } from '@/context/theme/ThemeContext';

type ActionsMenuProps = {
	className?: string;
	classNameForIcons?: string;
	delegated?: any;
};

const ActionsMenu: React.FC<ActionsMenuProps> = ({
	className = '',
	classNameForIcons = '',
	...delegated
}) => {
	const { theme, setTheme } = useThemeContext();

	const handleThemeChange = () => {
		const nextTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(nextTheme);
		Cookie.set('theme', nextTheme, { expires: 380 });

		const root = document.documentElement;
		root.setAttribute('data-color-theme', nextTheme);

		const colors = nextTheme === 'light' ? LIGHT_COLORS : DARK_COLORS;

		/* populate root element with new CSS variables based on theme selected */
		Object.entries(colors).forEach(([key, value]) => {
			root.style.setProperty(key, value);
		});
	};

	return (
		<button onClick={handleThemeChange} className={className} {...delegated}>
			{theme === 'light' ? (
				<Sun
					size="1.5em"
					style={{
						minWidth: '1.5rem',
						flexShrink: 0,
					}}
					className={classNameForIcons ?? ''}
				/>
			) : (
				<Moon
					size="1.5em"
					style={{
						minWidth: '1.5rem',
						flexShrink: 0,
					}}
					className={classNameForIcons ?? ''}
				/>
			)}
			<VisuallyHidden>Toggle dark / light mode</VisuallyHidden>
		</button>
	);
};

export default ActionsMenu;
