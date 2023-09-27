import React, { CSSProperties } from 'react';

import NavigationMain from '@/components/NavigationMain/NavigationMain';
import { cn } from '@/utils/utils';

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
