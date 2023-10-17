'use client';

import Image from 'next/image';
import Link from 'next/link';

import CardUI, { CardUIBody, CardUIFooter, CardUIHeader } from '@/components/CardUI';
import { Workplace } from '@/types/CurriculumVitae';
import { Divider } from '@nextui-org/react';

import FigureUI from '../FigureUI';
import KeywordList from '../KeywordList';

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
				<span className="flex gap-2 justify-between w-full items-center">
					<h4 className="font-bold text-large uppercase">{name}</h4>
					{logo && (
						<FigureUI
							className="block h-10 w-[clamp(40px,1rem,100%)] max-w-40 justify-end"
							// width={0}
							// height={0}
						>
							<Image
								src={logo ?? ''}
								alt={name}
								height={40}
								width={150}
								className="object-contain w-40 h-10 block"
							/>
						</FigureUI>
					)}
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
				<KeywordList keywords={keywords ?? []} />
			</CardUIFooter>
		</CardUI>
	);
}

export default WorkplaceCard;
