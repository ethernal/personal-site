'use client';
import React, { CSSProperties, useState } from 'react';

import Logo from '@/components/Logo';
import { ColorThemeType } from '@/types';
import { cn } from '@/utils/utils';

import ActionsMenu from '../ActionsMenu';
import NavigationMain from '../NavigationMain/NavigationMain';

type HeaderProps = {
	initialTheme: ColorThemeType;
	className?: CSSProperties | string;
};

function Header({ initialTheme, className, ...delegated }: HeaderProps) {
	return (
		<header className={cn(className)} {...delegated}>
			<NavigationMain />
		</header>
	);
}

export default Header;
