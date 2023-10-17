'use client';
import Link from 'next/link';
import React from 'react';

import BlogPostFrontmatterType from '@/types/BlogPostFrontmatterType';
import { Image } from '@nextui-org/react';

function BlogArticleCard({
	slug,
	title,
	author,
	abstract,
	publishedOn,
	image,
	imageAlt,
}: BlogPostFrontmatterType) {
	return (
		<div className="w-full overflow-hidden rounded-xl [&_p]:my-none">
			<article className="flex flex-col bg-slate-100 dark:bg-slate-800 md:flex-row">
				<div className="min-w-[50%] object-cover md:min-h-[26rem]">
					<Link href={slug}>
						<Image
							src={image}
							alt={imageAlt}
							className="max-h-[20rem] w-full min-w-[50%] object-cover md:min-h-[26rem] rounded-none"
							removeWrapper
						/>
					</Link>
				</div>

				<div className="flex h-[inherit] flex-col justify-between p-8">
					<h2 className="text-3xl font-semibold mt-0">
						<Link href={slug} className="no-underline">
							{title}
						</Link>
					</h2>
					<p className="text-lg line-clamp-6 my-0">
						<Link href={slug} className="no-underline">
							{abstract}
						</Link>
					</p>
					<footer className="flex flex-shrink justify-self-start max-sm:p-8 pt-4 max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:gap-4">
						<div className="aspect-square w-20 min-w-[3rem] overflow-hidden rounded-full">
							<Image
								src={`/image/profile/${author
									?.toLocaleLowerCase()
									.replaceAll(' ', '-')}.png`}
								alt={author}
								removeWrapper
							/>
						</div>
						<div className="flex flex-col gap-1 self-center ps-4 max-sm:items-center max-sm:justify-center [&>*]:leading-tight sm:self-end">
							<p className="font-semibold uppercase text-slate-600 dark:text-slate-400 max-sm:text-center my-0">
								{author}
							</p>
							<p>
								<time
									className="text-slate-500 dark:text-slate-500 my-0"
									dateTime={publishedOn}
								>
									{publishedOn}
								</time>
							</p>
						</div>
					</footer>
				</div>
			</article>
		</div>
	);
}

export default BlogArticleCard;
