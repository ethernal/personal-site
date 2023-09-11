import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { ReactNode, useState } from 'react';
import { Menu, X } from 'react-feather';

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
			<Logo className={`${styles.logo} order-first`} />

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
				{menuOpen === false ? <Menu /> : <X className="fixed top-1" />}
			</button>

			<nav
				id="primary-navigation-menu"
				className="flex justify-between bg-background-color"
			>
				<motion.ul
					initial={false}
					animate={menuOpen === true ? 'open' : 'closed'}
					transition={{
						type: 'spring',
						stiffness: 400,
						damping: 50,
					}}
					variants={{
						open: {
							translateX: '0%',
						},
						closed: {
							translateX: '100%',
						},
					}}
					data-menu-open={menuOpen}
					className={`${styles.primaryNavigation} flex max-xxs:inset-0`}
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
				</motion.ul>
			</nav>
		</div>
	);
};

export default NavigationMain;
