import React from 'react';

import BlogArticleCard from '@/components/BlogArticleCard';
import { SITE_TITLE } from '@/constants/constants';
import { getBlogPostsFrontmatter } from '@/helpers/fs-helpers';
import BlogPostFrontmatterType from '@/types/BlogPostFrontmatterType';

export const metadata = {
	title: SITE_TITLE,
	description:
		"Sebastian's thoughts on software development and all things life related.",
};

async function Home() {
	const postsList = await getBlogPostsFrontmatter();

	return (
		<div className="wrapper ">
			<h1>Latest Articles</h1>

			<section className="grid grid-cols-1 gap-12 my-5">
				{postsList.map((postFrontmatter: Partial<BlogPostFrontmatterType>) => {
					const {
						slug,
						title,
						abstract,
						publishedOn,
						image,
						imageAlt,
						author,
					} = postFrontmatter;
					return (
						<BlogArticleCard
							key={slug}
							{...postFrontmatter}
							slug={slug ?? ''}
							title={title ?? 'missing title'}
							abstract={abstract ?? 'abstract missing'}
							publishedOn={publishedOn ?? new Date().toLocaleDateString()}
							image={image}
							imageAlt={imageAlt}
							author={author ?? 'Sebastian Pieczyński'}
						/>
					);
				})}
			</section>
		</div>
	);
}

export default Home;
