import Link from 'next/link';
import React from 'react';

import BlogPostFrontmatterType from '@/types/BlogPostFrontmatterType';
import { cn, removeDiacritics } from '@/utils/utils';
import { Image } from '@nextui-org/react';

function BlogArticleCard({
	slug,
	title,
	author,
	abstract,
	publishedOn,
	image,
	imageAlt,
	className,
}: BlogPostFrontmatterType & { className?: string }) {
	return (
		<div
			className={cn(
				'w-full overflow-hidden rounded-theme-default [&_p]:my-none shadow-medium hover:shadow-high hover:-translate-y-px duration-200 h-min',
				className,
			)}
		>
			<article className="flex flex-col bg-theme-light-background-secondary dark:bg-theme-dark-background-secondary md:flex-row">
				<div className="min-w-[50%] object-cover md:min-h-[26rem]">
					<Link href={`/article/${slug}`}>
						<Image
							src={image ? image : ''}
							alt={imageAlt ? imageAlt : 'missing image'}
							className="max-h-[20rem] w-full min-w-[50%] object-cover md:min-h-[26rem] rounded-none"
							removeWrapper
						/>
					</Link>
				</div>

				<div className="flex h-[inherit] flex-col justify-between p-8">
					<h2 className="text-3xl font-semibold mt-0">
						<Link href={`/article/${slug}`} className="no-underline">
							{title}
						</Link>
					</h2>
					<p className="text-lg line-clamp-6 md:line-clamp-4 my-0">
						<Link href={`/article/${slug}`} className="no-underline">
							{abstract}
						</Link>
					</p>
					<footer className="flex flex-shrink justify-self-start max-sm:p-8 pt-4 max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:gap-4">
						<div className="aspect-square w-20 min-w-[3rem] overflow-hidden rounded-full">
							<Image
								src={`/image/profile/${
									author && author?.length > 0
										? removeDiacritics(
												author?.toLocaleLowerCase().replaceAll(' ', '-'),
											)
										: 'sebastian-pieczynski'
								}.png`}
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
									dateTime={new Date(publishedOn).toLocaleDateString()}
								>
									{new Date(publishedOn).toLocaleDateString()}
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
