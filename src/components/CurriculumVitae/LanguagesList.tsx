import React from 'react';

import LanguageCard from '@/components/LanguageCard';
import { Language } from '@/types/CurriculumVitae';
import { cn } from '@/utils/utils';

type LanguagesListProps = {
	languages: Prettify<Language>[];
	className?: string;
};

function LanguagesList({ languages, className }: LanguagesListProps) {
	return (
		<section data-section-languages className={cn('auto-grid', className)}>
			{languages.map((language) => {
				return (
					<article key={language.language}>
						<LanguageCard language={language} />
					</article>
				);
			})}
		</section>
	);
}

export default LanguagesList;
