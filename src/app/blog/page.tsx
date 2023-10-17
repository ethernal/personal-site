import React from 'react';

import BlogArticleCard from '@/components/BlogArticleCard';
import { SITE_TITLE } from '@/constants';
import { getBlogPostsFrontmatter } from '@/helpers/fs-helpers';

export const metadata = {
	title: SITE_TITLE,
	description:
		"Sebastian's thoughts on software development and all things about life.",
};

async function Home() {
	const postsList = await getBlogPostsFrontmatter();

	return (
		<div className="max-w-[var('--page-wrapper-max-width')] wrapper">
			<h1>Latest Articles</h1>

			{postsList.map((postFrontmatter) => {
				return (
					<BlogArticleCard
						key={postFrontmatter.slug}
						// extract all data from frontmatter
						{...postFrontmatter}
						// but be specific about what we want to use in the component
						// this basically doubles the extraction but in case anyone uses
						// frontmatter props without specifying them it will still work
						slug={postFrontmatter.slug}
						title={postFrontmatter.title}
						abstract={postFrontmatter.abstract}
						publishedOn={postFrontmatter.publishedOn}
						image={postFrontmatter.image}
						imageAlt={postFrontmatter.imageAlt}
						imageCredits={postFrontmatter.imageCredits}
					/>
				);
			})}
		</div>
	);
}

export default Home;
