import WorkplaceCard from '@/components/WorkplaceCard';
import { Workplace } from '@/types/CurriculumVitae';
import { cn, getDataAttributesFromJSONKeywords } from '@/utils/utils';

type WorkHistoryProps = {
	className?: string;
	workHistory: Workplace[];
};

export default function WorkHistory({
	className,
	workHistory: employmentHistory,
}: WorkHistoryProps) {
	return (
		<section className={cn('grid grid-cols-1 gap-theme-card', className)}>
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
