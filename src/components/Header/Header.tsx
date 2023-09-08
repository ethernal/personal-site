'use client';
import React, { CSSProperties, useState } from 'react';

import ColorThemeType from '@/types/ColorThemeType';
import { cn } from '@/utils/utils';

import NavigationMain from '../NavigationMain/NavigationMain';

type HeaderProps = {
	className?: CSSProperties | string;
};

function Header({ className, ...delegated }: HeaderProps) {
	return (
		<header className={cn(className)} {...delegated}>
			<NavigationMain />
		</header>
	);
}

export default Header;
