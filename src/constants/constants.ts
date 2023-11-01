import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';
import { remarkHeadingId } from 'remark-custom-heading-id';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';

export const SITE_PUBLISHED_YEAR_STRING = '2023';

export const SITE_TITLE = 'sebee.website';
export const AUTHOR = 'Sebastian Pieczynski';

export const SITE_PATHS = {
	pageContentBasePath: '/content/page',
	blogContentBasePath: '/content/blog',
	pageContentRelativeBasePath: './content/page',
	blogContentRelativeBasePath: './content/blog',
};

export const SOCIAL_X_HANDLE = '@spieczynski';

export const MDXOptions = {
	mdxOptions: {
		remarkPlugins: [
			remarkGfm,
			remarkHeadingId,
			[
				remarkToc,
				{
					heading: 'Contents',
					ordered: true,
					tight: true,
					maxDepth: 3,
				},
			],
		],
		rehypePlugins: [
			rehypeSlug,
			rehypeAutolinkHeadings,
			[rehypeExternalLinks, { target: '_blank' }],
		],
	},
};
