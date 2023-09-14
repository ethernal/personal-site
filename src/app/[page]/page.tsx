import { MDXRemote } from 'next-mdx-remote/rsc';
import React from 'react';

import ArticleInfo from '@/components/ArticleInfo';
import { COMPONENT_MAP } from '@/constants/componentMap';
import { MDXOptions, SITE_TITLE } from '@/constants/constants';
import { loadPageContent } from '@/helpers/fs-helpers';

export async function generateMetadata({ params, searchParams }) {
	const pageName = params?.page;
	const page = await loadPageContent(pageName);

	const { title, abstract, publishedOn } = page.frontmatter;

	return {
		title: title,
		name: `${title} • ${SITE_TITLE}`,
		content: abstract,
		created: publishedOn,
	};
}

async function AboutPage({ params, searchParams }) {
	const components = COMPONENT_MAP;
	const pageName = params?.page;
	const pageFile = await loadPageContent(pageName);

	const { title, publishedOn } = pageFile.frontmatter;

	return (
		// <article className={styles.wrapper}>
		<article>
			<header className="mx-auto max-w-[var(--page-wrapper-max-width)] wrapper">
				<ArticleInfo publishedOn={publishedOn}>{title}</ArticleInfo>
			</header>
			{/* <div className={styles.page}> */}
			<div className="wrapper">
				<MDXRemote
					source={pageFile.content}
					components={components}
					options={MDXOptions} // see: https://github.com/hashicorp/next-mdx-remote/issues/341
				/>
			</div>
		</article>
	);
}

export default AboutPage;
