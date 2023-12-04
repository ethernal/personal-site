import React, { Suspense } from 'react';

import { cn } from '@/utils/utils';

export type BlogArticleHeaderProps = {
	title: string;
	publishedOn?: string;
	className?: string;
};

function BlogArticleHeader({
	title,
	publishedOn,
	className,
}: BlogArticleHeaderProps) {
	return (
		<div className={cn('mb-1', className ?? '')}>
			<h2 className="mb-1">{title}</h2>
			{publishedOn !== undefined && publishedOn !== '' && (
				<p>Published on: {new Date(publishedOn).toLocaleDateString()}</p>
			)}
		</div>
	);
}

export default BlogArticleHeader;
