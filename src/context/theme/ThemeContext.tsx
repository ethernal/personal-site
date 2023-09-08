'use client';
import React, { createContext, ReactNode, useContext, useState } from 'react';

import ColorThemeType from '@/types/ColorThemeType';

type ThemeContext = {
	theme: ColorThemeType;
	setTheme: React.Dispatch<React.SetStateAction<ColorThemeType>>;
};

export const ThemeContext = createContext<ThemeContext | null>(null);

function Theme({ children }: { children: ReactNode }) {
	const [theme, setTheme] = useState<ColorThemeType>('light');

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useThemeContext() {
	const context = useContext(ThemeContext);

	if (context === undefined) {
		throw new Error('useThemeContext must be used within ThemeContextProvider');
	}

	return context;
}

export default Theme;
