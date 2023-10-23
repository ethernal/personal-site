import CardUI, { CardUIFooter, CardUIHeader } from '@/components/CardUI';
import ResponsiveImage from '@/components/ResponsiveImage';
import { EducationInstitution } from '@/types/CurriculumVitae';
import { cn } from '@/utils/utils';

type EducationCardProps = {
	education: Prettify<EducationInstitution>;
	className?: string;
};
function EducationCard({ education, className = '' }: EducationCardProps) {
	const { institution, area, studyType, startDate, endDate, image } = education;

	return (
		<CardUI
			className={cn(
				'p-0 mb-4 min-h-[300px] text-theme-light-text-dark bg-theme-light-background-card dark:text-theme-dark-text-light dark:bg-theme-dark-background-card',
				className,
			)}
			isBlurred={true}
			isFooterBlurred={true}
		>
			<CardUIHeader
				className={
					'absolute z-10 top-0 pt-2 flex-col items-start bg-theme-light-background-secondary/80 text-black/80 dark:text-white/80 dark:bg-theme-dark-background-secondary/80 bg-[linear-gradient(180deg,_rgba(255,255,255,0.4)_0%,_rgba(255,255,255,0.2)_100%)] pb-4 backdrop-blur-[2px]'
				}
			>
				<h4 className="font-bold text-large">{institution}</h4>
				<ul>
					<li className="text-small font-semibold uppercase pt-2">{area}</li>
					<li className="text-small font-semibold uppercase pt-0.5">
						{studyType}
					</li>
				</ul>
			</CardUIHeader>

			{image && image?.length > 0 && (
				<ResponsiveImage
					alt="Card background"
					className="z-0 w-full h-full object-cover"
					src={image}
				/>
			)}
			<CardUIFooter
				className={
					'p-0 z-10 bottom-4 absolute text-tiny rounded-none align-middle dark:bg-theme-dark-background-secondary/80'
				}
			>
				<p className="text-theme-black dark:text-theme-white/80 m-auto py-2 font-semibold text-small">
					{startDate} - {endDate}
				</p>
			</CardUIFooter>
		</CardUI>
	);
}

export default EducationCard;
