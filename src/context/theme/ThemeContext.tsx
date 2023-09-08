'use client';
import React, { createContext, ReactNode, useContext, useState } from 'react';

import ColorThemeType from '@/types/ColorThemeType';

type ThemeContext = {
	theme: ColorThemeType;
	setTheme: React.Dispatch<React.SetStateAction<ColorThemeType>>;
};

type ThemeProps = {
	initialTheme: ColorThemeType;
	children: ReactNode;
};


const ThemeContext = createContext<ThemeContext | null>(null);

function Theme({ initialTheme = 'light', children }: ThemeProps) {
	const [theme, setTheme] = useState<ColorThemeType>(initialTheme);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useThemeContext(): ThemeContext {
	const context = useContext(ThemeContext);

	if (context === undefined || context === null) {
		throw new Error('useThemeContext must be used within ThemeContextProvider');
	}

	return context;
}

export default Theme;
