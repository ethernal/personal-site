'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { ReactNode, useState } from 'react';
import { Menu, X } from 'react-feather';

import Logo from '@/components/Logo/Logo';
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle';
import { Badge } from '@nextui-org/react';

import TooltipMessage from '../TooltipMessage/TooltipMessage';

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
			className={`${className} flex justify-between items-center mb-8 bg-theme-accent ps-8 dark:first:text-theme-white first:text-theme-white text-theme-light-text-light dark:text-theme-dark-text-dark max-xs:py-1.5  `}
		>
			<Badge
				color="default"
				content={
					<TooltipMessage
						content="🌱"
						showUnderline={false}
						contentClassName="hover:animate-bounce"
					>
						I am still just a sprout and more features are in the works.
					</TooltipMessage>
				} // {''}
				variant="faded"
				className="opacity-75"
			>
				<Logo className={`mr-4 ps-viewport-padding order-first`} />
			</Badge>

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
				className={`
				h-full
				flex
				py-4
				justify-between

				bg-theme-light-background-secondary
				text-theme-light-text-dark

				dark:bg-theme-dark-background-secondary
				dark:text-theme-dark-text-light
				`}
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
					className={`
					flex max-xxs:inset-0
					items-center
					list-none
					z-40
					gap-6

					supports-[backdrop-filter]:backdrop-blur-md

					max-xs:fixed
					max-xs:inset-0
					max-xs:left-1/2
					max-xs:flex-col
					max-xs:p-[min(2.5em,calc(var(--header-height)))_4rem]
					xs:p-2
					data-[menu-open=false]:xs:force-translate-x-0

					sm:text-xl
					md:gap-8 [transition:gap]

					duration-150`}
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
						<ThemeToggle
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
