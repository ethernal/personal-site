import { format } from 'date-fns';

import BlogArticleCard from '@/components/BlogArticleCard';
import { SITE_TITLE } from '@/constants';
import { PublicationManager } from '@/manager/PublicationManager';

export const metadata = {
	title: SITE_TITLE,
	description:
		"Sebastian's thoughts on software development and all things about life. Expect React, NextJS, Remix, TailwindCSS and more.",
};

async function Home() {
	const postsList = await PublicationManager.findAllPublications();
	// const postsList = await getArticlesFrontmatter();

	return (
		<div className="wrapper max-w-[var('--page-wrapper-max-width')] min-h-[67dvh]">
			<h1>Latest Articles</h1>

			<section className="grid grid-cols-1 gap-8 my-5">
				{(postsList === undefined || postsList?.length === 0) && (
					<div className="min-h-[55dvh] py-10 text-center text-3xl">
						<p className="text-center text-3xl pt-10">
							No published articles here, yet.
						</p>
						<p className="text-center text-3xl pt-10">
							We know from a good source that there will be some fine content
							here soon.
						</p>
					</div>
				)}
				{postsList?.map((postFrontmatter) => {
					const {
						slug,
						title,
						abstract,
						publishedOn = Date.now(),
						image,
						imageAlt,
						publicationAuthors: author,
					} = postFrontmatter;
					return (
						<BlogArticleCard
							key={slug}
							// extract all data from frontmatter
							{...postFrontmatter}
							// but be specific about what we want to use in the component
							// this basically doubles the extraction but in case anyone uses
							// frontmatter props without specifying them it will still work
							title={title ?? 'missing title'}
							abstract={abstract ?? 'abstract missing'}
							publishedOn={
								format(publishedOn, 'yyyy-MM-dd') ??
								new Date().toLocaleDateString()
							}
							image={image}
							imageAlt={imageAlt}
							author={
								`${author[0]?.author?.firstName} ${author[0]?.author?.lastName}`.trim() ??
								'Sebastian Pieczyński'
							}
						/>
					);
				})}
			</section>
		</div>
	);
}

export default Home;
