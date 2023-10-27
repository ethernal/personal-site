import React, { CSSProperties } from 'react';

import NavigationMain from '@/components/NavigationMain/NavigationMain';
import { cn } from '@/utils/utils';

type HeaderProps = {
	className?: CSSProperties | string;
};

function Header({ className, ...delegated }: HeaderProps) {
	return (
		<header
			className={cn('sticky top-0 z-20 isolate', className)}
			{...delegated}
		>
			<NavigationMain className="rounded-b-theme-default" />
		</header>
	);
}

export default Header;
