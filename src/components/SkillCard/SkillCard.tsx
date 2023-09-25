'use client';
import * as React from 'react';

import { Skill, SkillLevel } from '@/types/CurriculumVitae';
import { cn } from '@/utils/utils';
import {
    Card, CardBody, CardFooter, CardHeader, CircularProgress, Divider
} from '@nextui-org/react';

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
		<Card className={cn('py-4 max-w-[15rem]', className)} isBlurred={true}>
			<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
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
			</CardHeader>
			<Divider orientation="horizontal" />

			<CardBody className="overflow-visible py-2 flex flex-row gap-4 items-center justify-center">
				<CircularProgress
					aria-label="Learning..."
					size="lg"
					value={value}
					color="success"
					showValueLabel={true}
					className="max-w-md"
				/>
				<p className="m-0">{level}</p>
			</CardBody>
			<Divider orientation="horizontal" />
			<CardFooter className="">
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
			</CardFooter>
		</Card>
	);
}

export default SkillCard;
