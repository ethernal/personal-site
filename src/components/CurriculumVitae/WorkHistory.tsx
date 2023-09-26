import { Workplace } from '@/types/CurriculumVitae';
import { cn, getDataAttributesFromJSONKeywords } from '@/utils/utils';

import WorkplaceCard from '../WorkplaceCard';

type WorkHistoryProps = {
	className?: string;
	workHistory: Workplace[];
};

export default function WorkHistory({
	className,
	workHistory: employmentHistory,
}: WorkHistoryProps) {
	return (
		<section className={cn('grid grid-cols-1 gap-4', className)}>
			{employmentHistory.map((workplace) => {
				const { name, startDate, keywords } = workplace;

				const dataKeywords = getDataAttributesFromJSONKeywords(keywords ?? []);

				return (
					<article key={`${name}-${startDate}`} {...dataKeywords}>
						<WorkplaceCard workplace={workplace} />
					</article>
				);
			})}
		</section>
	);
}
