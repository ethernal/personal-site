import React from 'react';

import SkillCard from '@/components/SkillCard';
import { Skill } from '@/types/CurriculumVitae';
import { cn } from '@/utils/utils';

type SkillsListProps = {
	skills: Prettify<Skill>[];
	className?: string;
};

function SkillsList({ skills, className }: SkillsListProps) {
	return (
		<section data-section-skills className={cn('auto-grid', className)}>
			{skills.map((skill: Skill, skillIndex: number) => {
				return <SkillCard skill={skill} key={skill.name + skillIndex} />;
			})}
		</section>
	);
}

export default SkillsList;
