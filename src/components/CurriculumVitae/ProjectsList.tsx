import Link from 'next/link';
import React from 'react';
import { TbWorldWww } from 'react-icons/tb';

import { Project } from '@/types/CurriculumVitae';
import { getDataAttributesFromJSONKeywords } from '@/utils/utils';

import HorizontalItem from '../HorizontalItem';

type ProjectsListProps = {
	projects: Project[];
	className?: string;
};

function ProjectsList({ projects, className }: ProjectsListProps) {
	return (
		<section className={className}>
			{projects?.map((skill: Project, projectIndex: number) => {
				const {
					name,
					startDate,
					endDate,
					description,
					highlights,
					url,
					keywords,
				} = skill;

				const dataKeywords = getDataAttributesFromJSONKeywords(keywords ?? []);

				return (
					<article
						key={`project-${name}-${projectIndex}`}
						data-has-keywords={Object.keys(dataKeywords).length}
						{...dataKeywords}
					>
						<ul>
							<HorizontalItem as="li" className="items-baseline gap-4">
								<h3 className="mb-0">{name}</h3>
								<Link href={url} target="_blank" className="relative top-[2px]">
									<TbWorldWww />
								</Link>
							</HorizontalItem>
							<HorizontalItem as="li">
								<p className="text-tiny">
									<time dateTime="YYYY-MM-DD">{startDate}</time>
									{endDate !== startDate && (
										<>
											{' '}
											&ndash; <time dateTime="YYYY-MM-DD">{endDate}</time>
										</>
									)}
								</p>
							</HorizontalItem>
							<li>{description}</li>
							<li>{highlights}</li>

							<ul className="text-tiny ms-4 mb-2">
								{keywords?.map((keyword, index) => {
									return (
										<li key={`skill-${name}-keyword-${index}`}>{keyword}</li>
									);
								})}
							</ul>
						</ul>
					</article>
				);
			})}
		</section>
	);
}

export default ProjectsList;
