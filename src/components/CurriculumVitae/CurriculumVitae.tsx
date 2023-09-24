import React from 'react';

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
			<WorkHistory workHistory={cv.work} />
			<EducationHistory education={cv.education} />
			<SkillsList skills={cv.skills} />
			<LanguagesList languages={cv.languages} />
			<ProjectsList projects={cv.projects} />
			<EmploymentStatus
				employmentStatus={cv.specific.work}
				dreamJob={cv.specific.dreamJob}
			/>
			<CertificatesList certificates={cv.certificates} />
			<PublicationsList publications={cv.publications} />
		</div>
	);
}

CurriculumVitae.PersonalInformation = PersonalInformation;
CurriculumVitae.WorkHistory = WorkHistory;

export default CurriculumVitae;
