'use client';

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
			className={cn('p-0 mb-4 min-h-[300px]', className)}
			isBlurred={true}
			isFooterBlurred={true}
		>
			<CardUIHeader
				className={
					'absolute z-10 top-1 flex-col items-start bg-white bg-[linear-gradient(180deg,_rgba(255,255,255,0.4)_0%,_rgba(255,255,255,0.2)_100%)] pb-4 backdrop-blur-[2px]'
				}
			>
				<h4 className="font-bold text-large uppercase dark:text-theme-black">
					{institution}
				</h4>
				<ul>
					<li className="text-small font-semibold dark:text-theme-black">
						{area}
					</li>
					<li className="text-small font-semibold dark:text-theme-black">
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
					'p-0 z-10 bottom-4 absolute text-tiny rounded-none align-middle'
				}
			>
				<p className="text-theme-black m-auto py-2 font-semibold text-small">
					{startDate} - {endDate}
				</p>
			</CardUIFooter>
		</CardUI>
	);
}

export default EducationCard;
