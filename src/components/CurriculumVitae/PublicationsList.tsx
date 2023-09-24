import React from 'react';

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
					>
						<ul>
							<li>
								{publication.name} published by: {publication.publisher} on{' '}
								{publication.releaseDate}
							</li>
							<li>{publication.summary}</li>
							<li>{publication.website}</li>
						</ul>
					</article>
				);
			})}
		</section>
	);
}

export default PublicationsList;
