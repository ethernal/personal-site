import 'server-only';

import fs from 'fs/promises';
import matter from 'gray-matter';
import path from 'path';
import { cache } from 'react';

import { SITE_PATHS } from '@/constants/constants';
import { BlogPostFrontmatterType } from '@/types';

export async function getBlogPostList(): Promise<BlogPostFrontmatterType[]> {
	const fileNames = await readDirectory(SITE_PATHS.blogContentBasePath);

	const blogPosts = [];

	for (let fileName of fileNames) {
		const rawContent = await readFile(
			`${SITE_PATHS.blogContentBasePath}/${fileName}`,
		);

		const { data: frontmatter } = matter(rawContent);

		blogPosts.push({
			slug: fileName.replace('.mdx', ''),
			...frontmatter,
		});
	}

	return blogPosts.sort((p1, p2) => (p1.publishedOn < p2.publishedOn ? 1 : -1));
}
export const loadBlogPost = cache(async (slug) => {
	const rawContent = await readFile(
		`${SITE_PATHS.blogContentBasePath}/${slug}.mdx`,
	);

	const { data: frontmatter, content } = matter(rawContent);

	return { frontmatter, content };
});

export const loadPageContent = cache(async (pageName: string) => {
	const fileNameWithSuffix = `${pageName}.mdx`;

	const pageFilePath = `${SITE_PATHS.pageContentBasePath}/${pageName}/${fileNameWithSuffix}`;

	const rawContent = await fs.readFile(process.cwd() + pageFilePath);

	const { data: frontmatter, content } = matter(rawContent);

	return { frontmatter, content };
});

function readFile(localPath) {
	return fs.readFile(path.join(process.cwd(), localPath));
}

function readDirectory(localPath: string) {
	return fs.readdir(path.join(process.cwd(), localPath));
}
