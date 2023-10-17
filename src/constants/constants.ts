import { CSSProperties } from 'react';
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

export const COLOR_DEFINITIONS = {
	'--color-theme-black': '#111',
	'--color-theme-white': '#fafffa',
	'--color-theme-ruby': 'hsl(7 95% 38% / 1)',
	'--color-theme-glass': 'hsl(0 100% 100% / 0.3)',
	'--color-theme-dark-gray': '#18181b',
};

export const LAYOUT_VARIABLES = {
	'--page-wrapper-max-width': '55rem',
	'--viewport-padding': '2rem',
	'--header-height': '5rem',
	'--page-content-width':
		'calc(var(--page-wrapper-max-width) - var(--page-wrapper-padding) - var(--page-wrapper-padding))',
};

export const LIGHT_COLORS = {
	'--brand-color': 'var(--color-theme-ruby)',
	'--primary-color': '#5E8E0A',
	'--background-color': 'var(--color-theme-white)',
	'--text-color': 'var(--color-theme-black)',
	'--text-color-inverted': 'var(--color-theme-white)',
	'--decoration': 'var(--primary-color)',
};

export const DARK_COLORS = {
	'--brand-color': 'var(--color-theme-ruby)',
	'--primary-color': '#5E8E0A',
	'--background-color': 'var(--color-theme-black)',
	'--text-color': 'var(--color-theme-white)',
	'--text-color-inverted': 'var(--color-theme-black)',
	'--decoration': 'var(--primary-color)',
};

export const LIGHT_SHADOWS = {};
export const DARK_SHADOWS = {};

export const LIGHT_TOKENS: CSSProperties = {
	...COLOR_DEFINITIONS,
	...LAYOUT_VARIABLES,
	...LIGHT_COLORS,
	...LIGHT_SHADOWS,
};

export const DARK_TOKENS: CSSProperties = {
	...COLOR_DEFINITIONS,
	...LAYOUT_VARIABLES,
	...DARK_COLORS,
	...DARK_SHADOWS,
};
