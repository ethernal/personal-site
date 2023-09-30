'use client';

import Link from 'next/link';

import CardUI, {
	CardUIBody,
	CardUIFooter,
	CardUIHeader,
} from '@/components/CardUI';
import ResponsiveImage from '@/components/ResponsiveImage';
import { Workplace } from '@/types/CurriculumVitae';
import { Divider } from '@nextui-org/react';

type WorkplaceCardProps = {
	workplace: Prettify<Workplace>;
	className?: string;
};
function WorkplaceCard({ className, workplace }: WorkplaceCardProps) {
	const {
		name,
		logo,
		position,
		website,
		startDate,
		endDate,
		summary,
		location,
		highlights,
		keywords,
	} = workplace;

	return (
		<CardUI className={className} isBlurred={true}>
			<CardUIHeader>
				<span className="flex gap-2 items-start justify-between w-full">
					<h4 className="font-bold text-large uppercase">{name}</h4>
					{logo && <ResponsiveImage src={logo ?? ''} alt={name} height={40} />}
				</span>
				<ul className="flex flex-row gap-2">
					<li className="text-tiny">
						{startDate} - {endDate}
					</li>
					<li className="text-tiny">{position}</li>
					<li className="text-tiny">{location}</li>
					<li className="text-tiny">
						<Link
							href={website}
							target="_blank"
							className="no-decoration no-underline hover:text-primary-color"
						>
							{website}
						</Link>
					</li>
				</ul>
			</CardUIHeader>
			<Divider orientation="horizontal" />

			<CardUIBody className={'flex flex-col gap-2'}>
				<p className="m-0">{summary}</p>
				<ul className="m-0  list-disc ps-4">
					{highlights?.map((highlight, index) => (
						<li
							key={`highlight-${name}-${index}`}
							className="text-small tracking-wide py-1"
						>
							{highlight}
						</li>
					))}
				</ul>
			</CardUIBody>
			<Divider orientation="horizontal" />
			<CardUIFooter>
				<ul className="flex flex-row gap-2 flex-wrap bg-[#ccd3c8] dark:bg-[#141b10] p-2 backdrop-blur-lg rounded-md">
					{keywords?.map((keyword) => {
						return (
							<li
								key={keyword.toLowerCase().replaceAll(' ', '-')}
								className="text-tiny uppercase dark:text-theme-white"
							>
								{keyword}
							</li>
						);
					})}
				</ul>
			</CardUIFooter>
		</CardUI>
	);
}

export default WorkplaceCard;
