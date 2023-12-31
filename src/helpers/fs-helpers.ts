import 'server-only';

import fs from 'fs/promises';
import matter from 'gray-matter';
import path from 'path';
import { cache } from 'react';

import BlogPostFrontmatterType from '@/types/BlogPostFrontmatterType';

export async function getArticlesFrontmatter() {
	try {
		const stats = await fs.stat('./content/articles');
		if (!stats?.isDirectory) return;
	} catch (err: any) {
		if (err?.code === 'ENOENT') {
			console.error('Directory with articles does not exist: ', err);
			return;
		} else {
			throw err;
		}
	}

	const fileNames = await readDirectory('./content/articles');

	const blogPosts: Array<Partial<BlogPostFrontmatterType>> = [];

	for (let fileName of fileNames) {
		const rawContent = await readFile(`./content/articles/${fileName}`);

		const { data: frontmatter } = matter(rawContent);

		if (frontmatter?.published === false) return;

		blogPosts.push({
			slug: fileName.replace('.mdx', ''),
			...frontmatter,
		});
	}

	return blogPosts?.sort((p1, p2) => {
		if (p1?.publishedOn !== undefined && p2?.publishedOn !== undefined) {
			const sortOrder = p1.publishedOn < p2?.publishedOn ? 1 : -1;
			return sortOrder;
		} else return 0;
	});
}
export const loadBlogPost = cache(async (slug: string) => {
	const rawContent = await readFile(`./content/articles/${slug}.mdx`);

	const { data: frontmatter, content } = matter(rawContent);

	return { frontmatter, content };
});

export const loadPageContent = cache(async (path: string) => {
	if (path === 'mockServiceWorker.js') return;

	const fileNameWithoutSuffix = path;

	const rawContent = await readFile(
		`./content/page/${fileNameWithoutSuffix}/${fileNameWithoutSuffix}.mdx`,
	);

	const { data: frontmatter, content } = matter(rawContent);

	return { frontmatter, content };
});

function readFile(localPath: string) {
	return fs.readFile(path.join(process.cwd(), localPath), 'utf8');
}

function readDirectory(localPath: string) {
	return fs.readdir(path.join(process.cwd(), localPath));
}
