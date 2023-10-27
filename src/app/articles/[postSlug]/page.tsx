import { MDXRemote } from 'next-mdx-remote/rsc';

import BlogArticleHeader from '@/components/BlogArticleHeader';
import { COMPONENT_MAP, MDXOptions, SITE_TITLE } from '@/constants';
import { loadBlogPost } from '@/helpers/fs-helpers';
import { BlogPostParams } from '@/types/BlogPageType';

export async function generateMetadata({ params }: BlogPostParams) {
	const post = await loadBlogPost(params.postSlug);

	const { title, abstract, publishedOn } = post.frontmatter;

	return {
		title: title,
		name: `${title} • ${SITE_TITLE}`,
		content: abstract,
		created: publishedOn,
	};
}

async function BlogPost({ params }: BlogPostParams) {
	const post = await loadBlogPost(params.postSlug);
	const { title, publishedOn } = post.frontmatter;

	const components = COMPONENT_MAP;

	return (
		<article className="max-w-[var('--page-wrapper-max-width')] wrapper pb-theme-default">
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
