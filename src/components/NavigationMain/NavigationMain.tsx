import Link from 'next/link';
import React, { ReactNode, useState } from 'react';
import { Menu, X } from 'react-feather';

import ColorThemeType from '@/types/ColorThemeType';

import ActionsMenu from '../ActionsMenu/ActionsMenu';
import Logo from '../Logo/Logo';
import styles from './NavigationMain.module.css';

type NavigationMainProps = {
	className?: string;
	children?: ReactNode;
};

const NavigationMain: React.FC<NavigationMainProps> = (props) => {
	const { className = '' } = props;

	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen((value) => !value);
	};

	return (
		<div className={`${className} ${styles.primaryHeader}`}>
			<Logo className={`${styles.logo} order-first`} mobileAlignment="center" />

			<button
				className={styles.mobileNavToggle}
				aria-controls="primary-navigation-menu"
				aria-expanded={menuOpen}
				onClick={() => toggleMenu()}
			>
				<span className="sr-only">
					{menuOpen === true ? 'close ' : 'open '}menu
				</span>
				{/* X is fixed so it stays in the same place when menu is open */}
				{menuOpen === false ? <Menu /> : <X className="fixed" />}
			</button>

			<nav id="primary-navigation-menu" className="flex justify-between">
				<ul
					data-menu-open={menuOpen}
					className={`${styles.primaryNavigation} flex`}
				>
					<li>
						<Link href={`/blog`} className="">
							Articles
						</Link>
					</li>
					<li>
						<Link href={`/about#cv`} className="uppercase">
							CV
						</Link>
					</li>
					<li>
						<Link href={`/about`} className="">
							About
						</Link>
					</li>
					<li>
						<Link href={`/contact`} className="">
							Contact
						</Link>
					</li>
					<li>
						<ActionsMenu
							className={`flex gap-4 items-center flex-grow-0 flex-shrink-0`}
							data-sm
						/>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default NavigationMain;
