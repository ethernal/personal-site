import React from 'react';

export type BlogArticleHeaderProps = {
	title: string;
	publishedOn: string;
};

function BlogArticleHeader({ title, publishedOn }: BlogArticleHeaderProps) {
	return (
		<div className="mb-1">
			<h2 className="mb-1">{title}</h2>
			{publishedOn !== undefined && publishedOn !== '' && (
				<p>Published on: {new Date(publishedOn).toLocaleDateString()}</p>
			)}
		</div>
	);

}

export default BlogArticleHeader;
