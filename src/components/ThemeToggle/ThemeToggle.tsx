import Cookie from 'js-cookie';
import React from 'react';
import { Moon, Sun } from 'react-feather';
import { toast } from 'react-toastify';

import VisuallyHidden from '@/components/VisuallyHidden';
import { useThemeContext } from '@/context/theme/ThemeContext';

type ThemeToggleProps = {
	className?: string;
	classNameForIcons?: string;
	delegated?: any;
};

const ThemeToggle: React.FC<ThemeToggleProps> = ({
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
		root.classList.remove('light');
		root.classList.remove('dark');
		root.classList.add(nextTheme);
	};

	return (
		<button onClick={handleThemeChange} className={className} {...delegated}>
			{theme === 'light' ? (
				<Sun
					size="24px"
					style={{
						minWidth: '1.5rem',
						flexShrink: 0,
						flexGrow: 0,
					}}
					className={classNameForIcons ?? ''}
				/>
			) : (
				<Moon
					size="24px"
					style={{
						minWidth: '1.5rem',
						flexShrink: 0,
						flexGrow: 0,
					}}
					className={classNameForIcons ?? 'shrink-0 flex-grow-0'}
				/>
			)}
			<VisuallyHidden>Toggle dark / light mode</VisuallyHidden>
		</button>
	);
};

export default ThemeToggle;
