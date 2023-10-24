import EducationCard from '@/components/EducationCard';
import { EducationInstitution } from '@/types/CurriculumVitae';
import { cn } from '@/utils/utils';

type EducationHistoryProps = {
	education: EducationInstitution[];
	className?: string;
};

function EducationHistory({ education, className }: EducationHistoryProps) {
	return (
		<section
			className={cn(
				'grid grid-cols-1 md:grid-cols-3 gap-theme-card',
				className,
			)}
		>
			{education.map((institution: EducationInstitution, index) => {
				return (
					<article
						key={`institution-${index}-${institution.institution}-${institution.startDate}`}
					>
						<EducationCard education={institution} />
					</article>
				);
			})}
		</section>
	);
}

export default EducationHistory;
