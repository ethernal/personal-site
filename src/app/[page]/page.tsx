import { MDXRemote } from 'next-mdx-remote/rsc';

import ArticleInfo from '@/components/ArticleInfo';
import { COMPONENT_MAP } from '@/constants/componentMap';
import { MDXOptions, SITE_TITLE } from '@/constants/constants';
import { loadPageContent } from '@/helpers/fs-helpers';
import prisma from '@/lib/prismaClient';
import { PageParams } from '@/types/PageParamsType';

export async function generateMetadata({ params, searchParams }: PageParams) {
	const pageName = params?.page ?? '';

	if (pageName === 'mockServiceWorker.js') {
		console.error('🐛 trying to load mockServiceWorker.js');
		return;
	}

	const page = await loadPageContent(pageName);

	const { title, abstract, publishedOn } = page?.frontmatter ?? {};

	return {
		title: title,
		name: `${title} • ${SITE_TITLE}`,
		content: abstract,
		created: new Date(publishedOn).toLocaleDateString(),
		metadataBase: new URL('https://sebeee.website'),
	};
}

async function SitePage({ params, searchParams }: PageParams) {
	const components = COMPONENT_MAP;
	const pageName = params?.page ?? '';

	console.log(prisma.$connect());
	prisma.$disconnect();

	if (pageName === 'mockServiceWorker.js') {
		console.error('🐛 trying to load mockServiceWorker.js');
		return;
	}
	const pageFile = await loadPageContent(pageName);

	const { title, publishedOn } = pageFile?.frontmatter ?? {};

	return (
		<article>
			<header className="mx-auto max-w-[var(--page-wrapper-max-width)] wrapper">
				<ArticleInfo publishedOn={publishedOn}>{title}</ArticleInfo>
			</header>
			<div className="wrapper">
				<MDXRemote
					source={pageFile?.content ?? ''}
					components={components}
					options={MDXOptions} // see: https://github.com/hashicorp/next-mdx-remote/issues/341
				/>
			</div>
		</article>
	);
}

export default SitePage;
