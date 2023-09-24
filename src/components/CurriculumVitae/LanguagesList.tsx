import React from 'react';

import { Language } from '@/types/CurriculumVitae';

type LanguagesListProps = {
	languages: Prettify<Language>[];
	className?: string;
};

function LanguagesList({ languages, className }: LanguagesListProps) {
	return (
		<section section-languages>
			{languages.map((language) => {
				return (
					<article key={language.language}>
						<ul>
							<li>{language.language}</li>
							<li>{language.value}</li>
							<li>{language.fluency}</li>
						</ul>
					</article>
				);
			})}
		</section>
	);
}

export default LanguagesList;
