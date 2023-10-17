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
				'flex flex-row gap-2 flex-wrap bg-green-100 dark:bg-theme-olive p-2 backdrop-blur-lg rounded-md',
				className,
			)}
		>
			{keywords?.map((keyword, index) => {
				return (
					<li
						key={`keyword-${keyword
							.toLowerCase()
							.replaceAll(' ', '-')}-${index}`}
						className="text-tiny uppercase dark:text-theme-white"
					>
						{keyword}
					</li>
				);
			})}
		</ul>
	);
}

export default KeywordList;
