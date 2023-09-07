import React from 'react';

export type BlogArticleHeaderProps = {
	title: string;
	publishedOn: string;
};

function BlogArticleHeader({ title, publishedOn }: BlogArticleHeaderProps) {
	return (
		<div>
			<h2>{title}</h2>
			<p>Published on: {publishedOn}</p>
		</div>
	);
}

export default BlogArticleHeader;
