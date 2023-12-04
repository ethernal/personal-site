import React from 'react';

import BlogArticleCard from '@/components/BlogArticleCard';
import { SITE_TITLE } from '@/constants';
import { getArticlesFrontmatter } from '@/helpers/fs-helpers';
import { Skeleton } from '@nextui-org/react';

export const metadata = {
	title: SITE_TITLE,
	description:
		"Sebastian's thoughts on software development and all things about life. Expect React, NextJS, Remix, TailwindCSS and more.",
};

async function HomeLoading() {
	const postsList = new Array(1, 2, 3, 4);

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
				{postsList?.map((postSkeleton) => {
					return (
						<Skeleton
							key={postSkeleton}
							className="w-full overflow-hidden rounded-theme-default [&_p]:my-none shadow-medium hover:shadow-high hover:-translate-y-px duration-200 h-min"
						>
							<BlogArticleCard
								slug={postSkeleton.toString()}
								// extract all data from frontmatter
								// but be specific about what we want to use in the component
								// this basically doubles the extraction but in case anyone uses
								// frontmatter props without specifying them it will still work
								title={'missing title'}
								abstract={'abstract missing'}
								publishedOn={'2023-12-24'}
								author={'Sebastian Pieczyński'}
							/>
						</Skeleton>
					);
				})}
			</section>
		</div>
	);
}

export default HomeLoading;
