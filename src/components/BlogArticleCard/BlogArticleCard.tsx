import Link from 'next/link';
import React from 'react';

import BlogPostFrontmatterType from '@/types/BlogPostFrontmatterType';

function BlogArticleCard({
	slug,
	title,
	abstract,
	publishedOn,
}: BlogPostFrontmatterType) {
	return (
		<div>
			<header>
				<h2>
					<Link href={`/blog/${slug}`}>{title}</Link>
				</h2>
				<time dateTime={publishedOn}>{publishedOn}</time>
			</header>
			<p>{abstract}</p>
		</div>
	);
}

export default BlogArticleCard;
