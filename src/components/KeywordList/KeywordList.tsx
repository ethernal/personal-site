import * as React from 'react';

import { cn } from '@/utils/utils';

type KeywordsListProps = {
	keywords: string[];
	className?: string;
};

function KeywordList({ keywords, className }: KeywordsListProps) {
  if (keywords?.length === 0) {
		return null;
	}
	return (
		<ul
			className={cn(
				'flex flex-row gap-3 flex-wrap bg-theme-light-background-primary dark:bg-theme-dark-background-primary p-2 backdrop-blur-lg rounded-theme-default',
				className,
			)}
		>
			{keywords?.map((keyword, index) => {
				return (
					<li
						key={`keyword-${keyword
							.toLowerCase()
							.replaceAll(' ', '-')}-${index}`}
						className="text-tiny uppercase text-theme-accent font-semibold tracking-wider"
					>
						{keyword}
					</li>
				);
			})}
		</ul>
	);
}

export default KeywordList;
