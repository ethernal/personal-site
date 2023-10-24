import Link from 'next/link';

import DividerUI from '@/components/DividerUI';
import {
	DreamJob,
	WorkExperienceAndAvailability,
} from '@/types/CurriculumVitae';
import { cn } from '@/utils/utils';

import CardUI, { CardUIBody, CardUIFooter, CardUIHeader } from '../CardUI';
import CircularProgressUI from '../CircularProgressUI';

type EmploymentStatusProps = {
	employmentStatus: WorkExperienceAndAvailability;
	dreamJob: Prettify<DreamJob>;
	className?: string;
};

type WorkExperienceCardProps = {
	years: number;
	label: string;
	header: React.ReactNode;
	maxYears?: number;
};

function WorkExperienceCard({
	years,
	label,
	header,
	maxYears = 50,
}: WorkExperienceCardProps) {
	return (
		<CardUI
			className={
				'min-h-[180px] bg-theme-light-background-card dark:bg-theme-dark-background-card'
			}
		>
			<CardUIHeader className={'py-0 my-0 [&>*]:my-0 items-center pb-4'}>
				{header}
			</CardUIHeader>
			<CardUIBody className={'justify-center py-0 items-center'}>
				<CircularProgressUI
					value={years}
					topic={label}
					maxValue={maxYears}
					size="3xl"
				/>
			</CardUIBody>
		</CardUI>
	);
}

function EmploymentStatus({
	employmentStatus,
	dreamJob,
	className,
}: EmploymentStatusProps) {
	return (
		<section className={cn('', className) ?? ''}>
			<article className="mb-theme-card">
				<CardUI
					className={
						'bg-theme-light-background-card dark:bg-theme-dark-background-card'
					}
				>
					<CardUIHeader>
						<h4 className="text-large">Current Status:</h4>
						{employmentStatus.searchState === 'activelySearching' ? (
							<p>I am available to hire!</p>
						) : null}
						<h4 className="text-large">Contract types:</h4>
						<p>
							I accept contracts for:{' '}
							{employmentStatus.contractTypes?.join(', ')} work.
						</p>
					</CardUIHeader>
					<DividerUI />
					<CardUIBody className={'pt-4 text-xl'}>
						<blockquote className="flex flex-col gap-1">
							{employmentStatus.codingReason}
							<footer className="text-theme-light-text-muted dark:text-theme-dark-text-muted">
								&mdash; Sebastian Pieczyński
							</footer>
						</blockquote>
					</CardUIBody>
				</CardUI>
			</article>

			<section className="grid max-xs:grid-cols-1 grid-cols-2 lg:grid-cols-3 gap-theme-card my-theme-card">
				<article>
					<WorkExperienceCard
						years={employmentStatus.experienceYears}
						header={<h3 className={'py-0'}>Working Years</h3>}
						label="Years of work experience"
					/>
				</article>

				<article>
					<WorkExperienceCard
						years={employmentStatus.codeExperienceYears}
						header={<h3 className={'py-0'}>Coding Professionally</h3>}
						label="Years of professional coding"
					/>
				</article>

				<article>
					<WorkExperienceCard
						years={employmentStatus.codeHobbyExperienceYears}
						header={<h3 className={'py-0'}>Coding since I was ~9</h3>}
						label="I've been coding since I was a kid."
					/>
				</article>

				<article>
					<WorkExperienceCard
						years={employmentStatus.itExperienceYears}
						header={<h3 className={'py-0'}>Office Experience</h3>}
						label={`I helped to build and shape organizations for ${employmentStatus.otherExperienceYears} years.`}
					/>
				</article>

				<article>
					<WorkExperienceCard
						years={employmentStatus.otherExperienceYears}
						header={<h3 className={'py-0'}>IT Experience</h3>}
						label={`During my ${employmentStatus.otherExperienceYears} years I've been an IT expert, one man IT manager and software engineer.`}
					/>
				</article>

				<article>
					<WorkExperienceCard
						years={new Date().getFullYear() - 2012}
						header={<h3 className={'py-0'}>Husband</h3>}
						label={`If that doesn't count as work I don't know what does.`}
					/>
				</article>
			</section>

			<article>
				<CardUI className="bg-theme-light-background-card dark:bg-theme-dark-background-card">
					<CardUIHeader className="items-center">
						<h3>
							Places I would 💓 to work from:{' '}
							{dreamJob?.locations
								?.map((location) => location?.name)
								.join(' or ')}
						</h3>
					</CardUIHeader>
					<CardUIBody className="flex flex-col items-center">
						<p className="text-base">
							When working remotely and there are no offices in my location I
							would prefer to work{' '}
							{dreamJob?.remoteFrequency.noOffice.frequency}ly at least{' '}
							{dreamJob?.remoteFrequency?.noOffice.daysPerWeek} days per week.
						</p>
						<p className="text-base">
							If there are offices in my location I would prefer to work{' '}
							{dreamJob?.remoteFrequency.hasOffice.frequency} at most{' '}
							{dreamJob?.remoteFrequency?.hasOffice.daysPerMonth} days per
							month.
						</p>
					</CardUIBody>
					<CardUIFooter className={'justify-center'}>
						<Link
							className="text-xl font-semibold "
							href="mailto:s.pieczynski@gmail.com?subject=Let%27s%20work%20together&body=Hi%20Sebastian%21%0D%0A%0D%0AI%20have%20seen%20you%20page%20and%20wanted%20to%20get%20in%20touch%20about%20existing%20work%20opportunity.%0D%0A%0D%0A%0D%0ABest%20regards%2C%0D%0A"
						>
							Let&apos;s get in touch!
						</Link>
					</CardUIFooter>
				</CardUI>
			</article>
		</section>
	);
}

export default EmploymentStatus;
