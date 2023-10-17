import React from 'react';

import PublicationCard from '@/components/PublicationCard';
import { Publication } from '@/types/CurriculumVitae';

type PublicationsListProps = {
	publications: Publication[];
	className?: string;
};

function PublicationsList({ publications, className }: PublicationsListProps) {
	return publications.map((publication: Publication) => {
		return (
			<article
				key={`publication-${publication.name}-${publication.releaseDate}`}
			>
				<PublicationCard publication={publication} />
			</article>
		);
	});
}

export default PublicationsList;
