import Link from 'next/link';
import { TbWorldWww } from 'react-icons/tb';

import { Employment } from '@/types/CurriculumVitae';

import HorizontalItem from '../HorizontalItem';

type WorkHistoryProps = {
	className?: string;
	workHistory: Employment[];
};

export default function WorkHistory({
	className,
	workHistory: employmentHistory,
}: WorkHistoryProps) {
	return (
		<section className={className}>
			{employmentHistory.map((workplace) => {
				const {
					name,
					position,
					website,
					startDate,
					endDate,
					summary,
					location,
					highlights,
					keywords,
				} = workplace;

				return (
					<article key={`${workplace.name}-${workplace.startDate}`}>
						<header>
							<HorizontalItem as="div" className="items-baseline gap-6">
								<p className={'text-xl font-semibold mb-0 mt-4'}>{name} </p>
								<Link href={website} target="_blank">
									<TbWorldWww />
								</Link>
							</HorizontalItem>
							<h3 className="font-semibold text-lg mt-2 mb-0">{position}</h3>
							<p className="text-small">
								<time dateTime="YYYY-MM-DD">{startDate}</time> &ndash;{' '}
								<time dateTime="YYYY-MM-DD">{endDate}</time>
							</p>
							<p>{location}</p>
						</header>
						<section>
							<p>{summary}</p>
							<p>{...highlights}</p>
						</section>
						<footer>
							<ul>
								{keywords?.map((keyword) => {
									return <li key={`${name}-keyword-${keyword}`}>{keyword}</li>;
								})}
							</ul>
						</footer>
					</article>
				);
			})}
		</section>
	);
}
