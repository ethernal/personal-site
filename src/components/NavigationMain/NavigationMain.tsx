'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { ReactNode, useState } from 'react';
import { Menu, X } from 'react-feather';

import ActionsMenu from '../ActionsMenu/ActionsMenu';
import Logo from '../Logo/Logo';

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
		// primary header
		<div
			className={`${className} flex justify-between items-center mb-8 bg-brand px-0 first:text-theme-white max-xs:py-1.5`}
		>
			<Logo className={`mr-4 ps-viewport-padding order-first`} />

			<button
				// mobileNavToggle
				className={
					'block order-last w-8 aspect-square top-0 right-8 z-50 text-theme-black supports-[backdrop-filter]:text-theme-white xs:hidden '
				}
				aria-controls="primary-navigation-menu"
				aria-expanded={menuOpen}
				onClick={() => toggleMenu()}
			>
				<span className="sr-only">
					{menuOpen === true ? 'close ' : 'open '}menu
				</span>
				{/* X is fixed so it stays in the same place when menu is open */}
				{menuOpen === false ? (
					<Menu className="min-w-[24px] min-h-[24px]" />
				) : (
					<X className="fixed top-1" />
				)}
			</button>

			{/* primary navigation */}
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
					className={`flex max-xxs:inset-0 items-center list-none z-40 text-text-color bg-theme-white supports-[backdrop-filter]:bg-theme-olive supports-[backdrop-filter]:backdrop-blur-md gap-6 max-xs:fixed max-xs:inset-0 max-xs:left-1/2  max-xs:flex-col max-xs:p-[min(2.5em,calc(var(--header-height)))_4rem] xs:p-2 data-[menu-open=false]:xs:force-translate-x-0 sm:text-xl	md:gap-8 [transition:gap] duration-150`}
				>
					<li className="first-letter:font-semibold text-xl tracking-widest">
						<Link href={`/blog`} className="">
							Articles
						</Link>
					</li>
					<li className="first-letter:font-semibold text-xl tracking-widest">
						<Link href={`/about#cv`} className="uppercase">
							CV
						</Link>
					</li>
					<li className="first-letter:font-semibold text-xl tracking-widest">
						<Link href={`/about`} className="">
							About
						</Link>
					</li>
					<li className="first-letter:font-semibold text-xl tracking-widest">
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
