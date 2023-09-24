import React from 'react';
import { LuFocus } from 'react-icons/lu';
import { PiStudent } from 'react-icons/pi';
import { SiLevelsdotfyi } from 'react-icons/si';

import { EducationHistory } from '@/types/CurriculumVitae';

import HorizontalItem from '../HorizontalItem';

type EducationHistoryProps = {
	education: EducationHistory[];
	className?: string;
};

function EducationHistory({ education, className }: EducationHistoryProps) {
	return (
		<section className={className}>
			{education.map((course: EducationHistory, index) => {
				return (
					<article
						key={`institution-${index}-${course.institution}-${course.startDate}`}
					>
						<ul>
							<HorizontalItem as="li">
								<PiStudent /> {course.institution}
							</HorizontalItem>
							<HorizontalItem as="li">
								<LuFocus /> {course.area}
							</HorizontalItem>
							<HorizontalItem as="li">
								<SiLevelsdotfyi /> {course.studyType}
							</HorizontalItem>
							<HorizontalItem as="li">
								<p className="text-small">
									<time dateTime="YYYY-MM-DD">{course.startDate}</time> &ndash;{' '}
									<time dateTime="YYYY-MM-DD">{course.endDate}</time>
								</p>
							</HorizontalItem>
						</ul>
					</article>
				);
			})}
		</section>
	);
}

export default EducationHistory;
