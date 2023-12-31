import Link from 'next/link';
import { FaChevronLeft as GoBackIcon } from 'react-icons/fa';

import { Skeleton } from '@nextui-org/react';

async function BlogPostLoader() {
	return (
		<article
			data-page-article
			className="max-w-[var('--page-wrapper-max-width')] wrapper pb-theme-default font-loading"
		>
			<h2 className="mb-1 font-loading">
				Sebastian Pieczynski&apos;s website and blog
			</h2>
			<p className="font-loading">Published on: yyyy.mm.dd</p>

			<div>
				<Skeleton className="w-full object-cover max-h-[500px] max-w-full mb-theme-default rounded-theme-default"></Skeleton>

				<Skeleton className="w-full h-48"></Skeleton>
				<Link
					href="/articles"
					className="mt-theme-default text-xl flex gap-2 items-end justify-end"
				>
					<GoBackIcon className="text-theme-accent" />
					<span className="first-letter:semibold font-heading">
						Back to Articles
					</span>
				</Link>
			</div>
		</article>
	);
}

export default BlogPostLoader;
