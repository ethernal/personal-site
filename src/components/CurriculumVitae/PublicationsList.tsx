import React from 'react';

import { Publication } from '@/types/CurriculumVitae';

import PublicationCard from '../PublicationCard';

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
					>
						<PublicationCard publication={publication} />
					</article>
				);
			})}
		</section>
	);
}

export default PublicationsList;
