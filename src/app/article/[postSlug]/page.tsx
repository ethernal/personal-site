import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronLeft as GoBackIcon } from 'react-icons/fa';

import BlogArticleHeader from '@/components/BlogArticleHeader';
import { COMPONENT_MAP, MDXOptions, SITE_TITLE } from '@/constants';
import { loadBlogPost } from '@/helpers/fs-helpers';
import { BlogPostParams } from '@/types/BlogPageType';

export async function generateMetadata({ params }: BlogPostParams) {
	const post = await loadBlogPost(params.postSlug);

	const { title, abstract, publishedOn, keywords } = post.frontmatter;

	return {
		metadataBase: new URL('https://sebee.website'),
		title: title,
		name: `${title} • ${SITE_TITLE}`,
		content: abstract,
		keywords: keywords?.join(', ') + ', ' + SITE_TITLE,
		created: new Date(publishedOn).toLocaleDateString(),
		openGraph: {
			title: title,
			description: abstract,
			url: `/article/${params.postSlug}`,
			siteName: SITE_TITLE,
			images: [
				{
					url: `/${params.postSlug}/opengraph-image.png`,
					width: 1200,
					height: 630,
					alt: 'Read ' + title + ' ' + SITE_TITLE,
				},
			],
			locale: 'en_US',
			type: 'website',
		},
	};
}

async function BlogPost({ params }: BlogPostParams) {
	const post = await loadBlogPost(params.postSlug);
	const { title, publishedOn } = post.frontmatter;

	const components = COMPONENT_MAP;

	return (
		<article
			data-page-article
			className="max-w-[var('--page-wrapper-max-width')] wrapper pb-theme-default"
		>
			<BlogArticleHeader title={title} publishedOn={publishedOn} />
			<div>
				<Image
					src={post.frontmatter.image}
					alt={post.frontmatter.imageAlt}
					className="object-cover max-h-[500px] w-full max-w-full mb-theme-default rounded-theme-default"
					height={500}
					width={1200}
				/>
				<MDXRemote
					source={post?.content}
					components={components}
					options={MDXOptions} // see: https://github.com/hashicorp/next-mdx-remote/issues/341
				/>
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

export default BlogPost;
