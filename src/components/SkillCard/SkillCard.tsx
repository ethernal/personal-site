'use client';

import CardUI, {
	CardUIBody,
	CardUIFooter,
	CardUIHeader,
} from '@/components/CardUI';
import { Skill, SkillLevel } from '@/types/CurriculumVitae';
import { cn } from '@/utils/utils';
import { CircularProgress, Divider } from '@nextui-org/react';

import KeywordList from '../KeywordList';

type SkillCardProps = {
	skill: Prettify<Skill>;
	className?: string;
};

export const SkillHierarchy: Array<SkillLevel> = [
	'Beginner',
	'Intermediate',
	'Advanced',
	'Expert',
];

function SkillCard({ skill, className = '' }: SkillCardProps) {
	const { name, value, level, keywords } = skill;
	return (
		<CardUI
			className={cn('dark:bg-theme-dark-gray', className)}
			isBlurred={true}
		>
			<CardUIHeader>
				<h4 className="font-bold text-large uppercase">{name}</h4>
				<small className="text-default-500">
					Next level:{' '}
					<span className="capitalize">
						{
							SkillHierarchy[
								SkillHierarchy.findIndex((skillLevel) => {
									return skillLevel.toLowerCase() === level.toLowerCase();
								}) + 1
							]
						}
					</span>
				</small>
			</CardUIHeader>
			<Divider orientation="horizontal" />

			<CardUIBody>
				<CircularProgress
					aria-label="Learning..."
					size="lg"
					value={value}
					color="success"
					showValueLabel={true}
					className="max-w-md"
				/>
				<p className="m-0">{level}</p>
			</CardUIBody>
			<Divider orientation="horizontal" />
			<CardUIFooter>
				<KeywordList keywords={keywords ?? []} />
			</CardUIFooter>
		</CardUI>
	);
}

export default SkillCard;
