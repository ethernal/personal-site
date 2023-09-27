import React from 'react';

import PublicationCard from '@/components/PublicationCard';
import { Publication } from '@/types/CurriculumVitae';

type PublicationsListProps = {
	publications: Publication[];
	className?: string;
};

function PublicationsList({ publications, className }: PublicationsListProps) {
	return (
		<section data-section-publications className={className}>
			{publications.map((publication: Publication) => {
				return (
					<article
						key={`publication-${publication.name}-${publication.releaseDate}`}
						className="h-full"
					>
						<PublicationCard publication={publication} />
					</article>
				);
			})}
		</section>
	);
}

export default PublicationsList;
