import React from 'react';

import BlogArticleCard from '@/components/BlogArticleCard';
import { SITE_TITLE } from '@/constants/constants';
import { getBlogPostList } from '@/helpers/fs-helpers';

export const metadata = {
	title: SITE_TITLE,
	description:
		"Sebastian's thoughts on software development and all things life related.",
};

async function Home() {
	const posts = await getBlogPostList();

	return (
		<div className="wrapper max-w-[var('--page-wrapper-max-width')]">
			<h1>Latest Articles</h1>

			{posts.map((post) => {
				const { slug, title, abstract, publishedOn } = post;
				return (
					<BlogArticleCard
						key={slug}
						slug={slug}
						title={title}
						abstract={abstract}
						publishedOn={publishedOn}
					/>
				);
			})}
		</div>
	);
}

export default Home;
