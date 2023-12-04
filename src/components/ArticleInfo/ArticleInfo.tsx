import { ReactNode } from 'react';

import { cn } from '@/utils/utils';

type ArticleInfoProps = {
	children: ReactNode;
	publishedOn: string;
	className?: string;
};

function ArticleInfo({
	publishedOn,
	children,
	className = '',
}: ArticleInfoProps) {
	if (children && publishedOn !== '') {
		return (
			<div className={`px-viewport-padding`}>
				<h2 className={cn(`mb-0`, className)}>{children}</h2>
				<ul className={`m-0 list-none`}>
					<li className={`text-sm`}>
						Published on: {new Date(publishedOn).toLocaleDateString()}
					</li>
				</ul>
			</div>
		);
	} else return null;
}

export default ArticleInfo;
