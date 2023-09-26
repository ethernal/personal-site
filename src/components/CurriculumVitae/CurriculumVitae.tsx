import cv from '@/data/cv/cv-en.json';

import EmploymentStatus from '../EmploymentStatus';
import CertificatesList from './CertificatesList';
import EducationHistory from './EducationHistory';
import LanguagesList from './LanguagesList';
import PersonalInformation from './PersonalInformation';
import ProjectsList from './ProjectsList';
import PublicationsList from './PublicationsList';
import SkillsList from './SkillsList';
import WorkHistory from './WorkHistory';

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
			<h2>Projects Protfolio</h2>
			<ProjectsList projects={cv.projects} />
			<h2>Dream Job</h2>
			<EmploymentStatus
				employmentStatus={cv.specific.work}
				dreamJob={cv.specific.dreamJob}
			/>
			<h2>Certificates</h2>
			<CertificatesList certificates={cv.certificates} />
			<h2>Publications</h2>
			<PublicationsList publications={cv.publications} />
		</div>
	);
}

CurriculumVitae.PersonalInformation = PersonalInformation;
CurriculumVitae.WorkHistory = WorkHistory;

export default CurriculumVitae;
