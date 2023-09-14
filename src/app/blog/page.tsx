import React from 'react';

import BlogArticleCard from '@/components/BlogArticleCard';
import { SITE_TITLE } from '@/constants';
import { getBlogPostList } from '@/helpers/fs-helpers';

export const metadata = {
	title: SITE_TITLE,
	description:
		"Sebastian's thoughts on software development and all things about life.",
};

async function Home() {
	const postsList = await getBlogPostList();

	return (
		<div className="max-w-[var('--page-wrapper-max-width')] wrapper">
			<h1>Latest Articles</h1>

			{postsList.map((postFrontmatter) => {
				return (
					<BlogArticleCard
						key={postFrontmatter.slug}
						slug={postFrontmatter.slug}
						title={postFrontmatter.title}
						abstract={postFrontmatter.abstract}
						publishedOn={postFrontmatter.publishedOn}
					/>
				);
			})}
		</div>
	);
}

export default Home;
