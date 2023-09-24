import {
	DreamJob,
	WorkExperienceAndAvailability,
} from '@/types/CurriculumVitae';

type EmploymentStatusProps = {
	employmentStatus: WorkExperienceAndAvailability;
	dreamJob: Prettify<DreamJob>;
	className?: string;
};

function EmploymentStatus({
	employmentStatus,
	dreamJob,
	className,
}: EmploymentStatusProps) {
	return (
		<section className={className ?? ''}>
			<article>
				<ul>
					<li>{employmentStatus.searchState}</li>
					<li>{employmentStatus.contractTypes?.join(', ')}</li>
					<li>{employmentStatus.codingReason}</li>
					<li>{employmentStatus.experienceYears}</li>
					<li>{employmentStatus.codeExperienceYears}</li>
					<li>{employmentStatus.otherExperienceYears}</li>
				</ul>
			</article>
			<article>
				<ul>
					<li>
						{dreamJob?.locations?.map((location) => location?.name).join(', ')}
					</li>
					<li>{dreamJob?.remoteFrequency.frequency}</li>
					<li>{dreamJob?.remoteFrequency.daysPerWeek}</li>
				</ul>
			</article>
			<article>
				<ul>
					<li>
						{dreamJob?.locations?.map((location) => location?.name).join(', ')}
					</li>
					<li>{dreamJob?.remoteFrequency.frequency}</li>
					<li>{dreamJob?.remoteFrequency.daysPerWeek}</li>
				</ul>
			</article>
		</section>
	);
}

export default EmploymentStatus;
