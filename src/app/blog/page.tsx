import React from 'react';

import BlogArticleCard from '@/components/BlogArticleCard';

import { getBlogPostList } from '@/helpers/fs-helpers';
import { SITE_TITLE } from '@/constants';

export const metadata = {
	title: SITE_TITLE,
	description:
		"Sebastian's thoughts on software development and all things about life.",
};

async function Home() {
	const posts = await getBlogPostList();

	return (
		<div className="wrapper max-w-[var('--page-wrapper-max-width')]">
			<h1>Latest Articles</h1>

			{posts.map((post) => {
				return (
					<BlogArticleCard
						key={post.slug}
						slug={post.slug}
						title={post.title}
						abstract={post.abstract}
						publishedOn={post.publishedOn}
					/>
				);
			})}
		</div>
	);
}

export default Home;
