import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import { remarkHeadingId } from 'remark-custom-heading-id';
import remarkGfm from 'remark-gfm';

export const SITE_PUBLISHED_YEAR_STRING = '2023';

export const SITE_TITLE = 'sebee.dev';
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
		remarkPlugins: [remarkGfm, remarkHeadingId],
		rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
	},
};
