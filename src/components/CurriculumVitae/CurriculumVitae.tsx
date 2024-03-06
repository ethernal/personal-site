import EmploymentStatus from '@/components//EmploymentStatus';
import EducationHistory from '@/components/CurriculumVitae//EducationHistory';
import LanguagesList from '@/components/CurriculumVitae//LanguagesList';
import PersonalInformation from '@/components/CurriculumVitae//PersonalInformation';
import ProjectsList from '@/components/CurriculumVitae//ProjectsList';
import PublicationsList from '@/components/CurriculumVitae//PublicationsList';
import SkillsList from '@/components/CurriculumVitae//SkillsList';
import WorkHistory from '@/components/CurriculumVitae//WorkHistory';
import CertificatesList from '@/components/CurriculumVitae/CertificatesList';
import cv from '@/data/cv/cv-en.json';

type CurriculumVitaeProps = {
	className?: string;
};

function CurriculumVitae({ className }: CurriculumVitaeProps) {
	return (
		<div>
			<PersonalInformation
				className={className}
				personalInformation={cv.basics}
			/>
			<h2>Work History</h2>
			<WorkHistory workHistory={cv.work} />
			<h2>Education</h2>
			<EducationHistory education={cv.education} />
			<h2>Skills</h2>
			<SkillsList skills={cv.skills} />
			<h2>Languages</h2>
			<LanguagesList languages={cv.languages} />
			<h2>Projects Portfolio</h2>
			<ProjectsList projects={cv.projects} />
			<h2>Dream Job</h2>
			<EmploymentStatus
				latestWorkplace={cv.work[0]}
				employmentStatus={cv.specific.work}
				dreamJob={cv.specific.dreamJob}
			/>
			<h2>Certificates & Publications</h2>
			<section className="grid xs:grid-cols-1 sm:grid-cols-2 gap-theme-card mb-8">
				<CertificatesList
					certificates={cv.certificates}
					className="h-full w-full"
				/>
				<PublicationsList publications={cv.publications} />
			</section>
		</div>
	);
}

CurriculumVitae.PersonalInformation = PersonalInformation;
CurriculumVitae.WorkHistory = WorkHistory;

export default CurriculumVitae;
