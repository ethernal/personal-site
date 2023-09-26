'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Workplace } from '@/types/CurriculumVitae';
import { Divider } from '@nextui-org/react';

import CardUI, { CardUIBody, CardUIFooter, CardUIHeader } from '../CardUI';

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
					{logo && <Image src={logo ?? ''} alt={name} width={40} height={40} />}
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
							className="no-decoration no-underline hover:text-primary"
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
				<ul className="flex flex-row gap-2 flex-wrap bg-green-100 p-2 backdrop-blur-lg rounded-md">
					{keywords?.map((keyword) => {
						return (
							<li
								key={keyword.toLowerCase().replaceAll(' ', '-')}
								className="text-tiny uppercase"
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
