import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import { remarkHeadingId } from 'remark-custom-heading-id';
import remarkGfm from 'remark-gfm';

export const SITE_PUBLISHED_YEAR_STRING = '2023';

export const SITE_TITLE = 'sebee.dev';

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
		rehypePlugins: [],
		// rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
	},
};

export const LIGHT_COLORS = {
	'--page-wrapper-max-width': '55rem',
	'--viewport-padding': '2rem',
	'--header-height': '5rem',

	'--color-black': '#111',
	'--color-white': '#ddd',
	'--color-ruby': 'hsl(7 95% 38% / 1)',
	'--brand-color': 'var(--color-ruby)',
	'--primary-color': '#5E8E0A',
	'--background-color': 'var(--color-white)',
	'--text-color': 'var(--color-black)',
	'--text-color-inverted': 'var(--color-white)',
	'--decoration-color': 'var(--primary-color)',
	'--page-content-width':
		'calc(var(--page-wrapper-max-width) - var(--page-wrapper-padding-inline))',
};
export const DARK_COLORS = {
	'--layout-wrapper-max-width': '55rem',
	'--viewport-padding': '2rem',
	'--header-height': '5rem',

	'--color-black': '#111',
	'--color-white': '#ddd',
	'--color-ruby': 'hsl(7 95% 38% / 1)',
	'--brand-color': 'var(--color-ruby)',
	'--primary-color': '#5E8E0A',
	'--background-color': 'var(--color-black)',
	'--text-color': 'var(--color-white)',
	'--text-color-inverted': 'var(--color-black)',
	'--decoration-color': 'var(--primary-color)',
};

export const LIGHT_SHADOWS = {};
export const DARK_SHADOWS = {};

export const LIGHT_TOKENS = { ...LIGHT_COLORS, ...LIGHT_SHADOWS };

export const DARK_TOKENS = { ...DARK_COLORS, ...DARK_SHADOWS };
