import React from 'react';

import BlogArticleHeader from '@/components/BlogArticleHeader';

import { loadBlogPost } from '@/helpers/fs-helpers';

import { MDXRemote } from 'next-mdx-remote/rsc';
import { SITE_TITLE, MDXOptions } from '@/constants';
import { COMPONENT_MAP } from '@/constants';

export async function generateMetadata({ params }) {
	const post = await loadBlogPost(params.postSlug);

	const { title, abstract, publishedOn } = post.frontmatter;

	return {
		title: title,
		name: `${title} • ${SITE_TITLE}`,
		content: abstract,
		created: publishedOn,
	};
}

async function BlogPost({ params }) {
	const post = await loadBlogPost(params.postSlug);
	const { title, publishedOn } = post.frontmatter;

	const components = COMPONENT_MAP;

	return (
		<article>
			<BlogArticleHeader title={title} publishedOn={publishedOn} />
			<div>
				<MDXRemote
					source={post?.content}
					components={components}
					options={MDXOptions} // see: https://github.com/hashicorp/next-mdx-remote/issues/341
				/>
			</div>
		</article>
	);
}

export default BlogPost;
