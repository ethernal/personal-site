import * as React from 'react';

import { Image } from '@nextui-org/react';

import CTAButton from '../CTAButton';

/* extract all data from component below and change it into props */
type PortfolioItemProps = {
	title: string;
	srcImage: string;
	daysToComplete: number;
};

function PortfolioItem({
	title,
	srcImage,
	daysToComplete,
}: PortfolioItemProps) {
	return (
		<div className="grid content-between group">
			<h3 className="text-theme-light-text-dark dark:text-theme-dark-text-light pb-4">
				{title}
			</h3>
			<div className="grid">
				<Image
					src={srcImage}
					alt={title}
					radius="sm"
					removeWrapper={true}
					className="z-0 w-full h-full object-cover col-start-1 row-start-1 group-hover:bg-slate-300 group-hover:backdrop-brightness-50"
				/>
				<div className="flex justify-center items-center col-start-1 row-start-1 z-10 w-full h-full opacity-0 group-hover:opacity-60 bg-black transition-opacity duration-250"></div>

				<div className="flex justify-center items-center col-start-1 row-start-1 z-20 w-full h-full opacity-0 group-hover:opacity-100 bg-transparent transition-opacity duration-250">
					<CTAButton className="opacity-100 z-20 bg-transparent text-theme-accent border-theme-accent border-2 h-12">
						View
					</CTAButton>
				</div>
				<div className="z-10  bg-theme-light-background-primary-muted dark:bg-theme-dark-background-primary-muted text-theme-light-text-dark dark:text-theme-dark-text-light px-[4%] py-[2%] rounded-md col-start-1 row-start-1 justify-self-end self-end min-w-max">
					<span className="text-[clamp(0.825rem,-0.875rem+3vw,2.5rem)]">
						{daysToComplete > 1
							? `${daysToComplete} days`
							: `${daysToComplete} day`}
					</span>
				</div>
			</div>
		</div>
	);
}

export default PortfolioItem;
