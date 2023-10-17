'use client';

import CardUI, {
	CardUIBody,
	CardUIFooter,
	CardUIHeader,
} from '@/components/CardUI';
import ResponsiveImage from '@/components/ResponsiveImage';
import { Project } from '@/types/CurriculumVitae';
import { cn } from '@/utils/utils';
import { Divider } from '@nextui-org/react';

import KeywordList from '../KeywordList';

type ProjectCardProps = {
	project: Prettify<Project>;
	className?: string;
};

function ProjectCard({ project, className = '' }: ProjectCardProps) {
	const {
		name,
		description,
		startDate,
		endDate,
		highlights,
		keywords,
		url,
		gallery,
	} = project;
	return (
		<CardUI
			className={cn('dark:bg-theme-dark-gray', className)}
			isBlurred={true}
			isFooterBlurred={true}
		>
			<CardUIHeader>
				<h4 className="font-bold text-large uppercase">{name}</h4>
				<p className="text-default-500 text-tiny">
					{startDate} - {endDate}
				</p>
				<small>{highlights}</small>
			</CardUIHeader>
			<Divider orientation="horizontal" />

			<CardUIBody className={'relative p-0'}>
				{gallery && gallery?.length > 0 ? (
					<ResponsiveImage
						src={gallery && gallery?.length > 0 ? gallery[0]?.src : ''}
						alt={
							gallery && gallery?.length > 0 ? gallery[0]?.alt : 'missing image'
						}
						className="rounded-none aspect-video object-cover absolute top-0 left-0 w-full h-full opacity-25 z-0 "
						style={{
							opacity: 0.3,
						}}
					/>
				) : null}
				<p className="m-0 h-full w-full z-10 backdrop-blur-[2px] p-4 text-base">
					{description}
				</p>
			</CardUIBody>
			<Divider orientation="horizontal" />
			<CardUIFooter className={'text-tiny rounded-none max-w-[99%]'}>
				<KeywordList keywords={keywords ?? []} />
			</CardUIFooter>
		</CardUI>
	);
}

export default ProjectCard;
