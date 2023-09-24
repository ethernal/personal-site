import React from 'react';

import { Skill } from '@/types/CurriculumVitae';

type SkillsListProps = {
	skills: Skill[];
	className?: string;
};

function SkillsList({ skills, className }: SkillsListProps) {
	return (
		<section className={className}>
			{skills.map((skill: Skill, skillIndex: number) => {
				const { name, level, value, keywords } = skill;

				let dataKeywords = {};
				keywords?.forEach((keyword) => {
					const attr = { [`data-keyword-${keyword.toLowerCase()}`]: keyword };
					dataKeywords = {
						...dataKeywords,
						...attr,
					};
				});

				return (
					<article
						key={`skill-${name}-${skillIndex}`}
						data-has-keywords={Object.keys(dataKeywords).length}
						{...dataKeywords}
					>
						<ul>
							<li>{name}</li>
							<li>{level}</li>
							<li>{value}</li>

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

export default SkillsList;
