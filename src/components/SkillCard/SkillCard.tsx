import CardUI, {
	CardUIBody,
	CardUIFooter,
	CardUIHeader,
} from '@/components/CardUI';
import DividerUI from '@/components/DividerUI';
import { Skill, SkillLevel } from '@/types/CurriculumVitae';
import { cn } from '@/utils/utils';

import CircularProgressUI from '../CircularProgressUI';
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
			className={cn(
				'bg-theme-light-background-card dark:bg-theme-dark-background-card hover:scale-110 focus:scale-110 hover:z-10 focus:z-10 hover:border-theme-accent-muted focus:border-theme-accent-muted hover:border-2 focus:border-2 duration-250',
				className,
			)}
			isBlurred={true}
		>
			<CardUIHeader>
				<h4 className="font-bold text-large uppercase">{name}</h4>
				<small className="text-theme-light-text-muted dark:text-theme-dark-text-muted">
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
			<DividerUI orientation="horizontal" />

			<CardUIBody className={'flex flex-col-reverse items-center justify-end'}>
				<CircularProgressUI topic={name} value={value} size="3xl" />
				<p className="m-0">{level}</p>
			</CardUIBody>
			<DividerUI orientation="horizontal" />
			<CardUIFooter>
				<KeywordList keywords={keywords ?? []} />
			</CardUIFooter>
		</CardUI>
	);
}

export default SkillCard;
