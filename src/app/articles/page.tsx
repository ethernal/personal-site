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
		<div className="wrapper max-w-[var('--page-wrapper-max-width')]">
			<h1>Latest Articles</h1>

			<section className="grid grid-cols-1 gap-5 my-5">
				{(postsList === undefined || postsList?.length === 0) && (
					<p className="text-center text-3xl py-10 min-h-[55dvh]">
						No published articles here, yet.
						<br /> We know from a good source that there will be some fine
						content here soon.
					</p>
				)}
				{postsList?.map((postFrontmatter) => {
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
							slug={slug ?? ''}
							// extract all data from frontmatter
							{...postFrontmatter}
							// but be specific about what we want to use in the component
							// this basically doubles the extraction but in case anyone uses
							// frontmatter props without specifying them it will still work
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
