import 'server-only';

import fs from 'fs/promises';
import matter from 'gray-matter';
import path from 'path';
import { cache } from 'react';

import BlogPostFrontmatterType from '@/types/BlogPostFrontmatterType';
import { slugify } from '@/utils/utils';

function isDirectory(path: string) {
	return fs
		.lstat(path)
		.then((stat) => stat.isDirectory())
		.catch(() => false);
}

async function getDirectoryFiles(path: string) {
	if ((await isDirectory(path)) === true) {
		return fs
			.readdir(path)
			.then((files) => files.filter((file) => !file.startsWith('.')));
	} else return null;
}

export async function getArticles() {
	const fileNames = await getDirectoryFiles('./content/articles');

	console.log('Filenames: ', fileNames);
	const pureFileNames = fileNames?.map((fileName) =>
		fileName.replace('.mdx', ''),
	);

	const articles: Array<ArticleData> = [];

	if (pureFileNames === undefined) return;

	for (let i = 0; i < pureFileNames?.length; i++) {
		const { content, frontmatter } = await loadBlogPost(pureFileNames[i]);

		frontmatter.slug = slugify(frontmatter.title.replace('.mdx', ''));
		articles.push({ content, frontmatter });
	}

	return articles;
}

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

	return blogPosts?.sort((p1, p2) =>
		p1 &&
		p1.publishedOn &&
		p1.publishedOn < p2 &&
		p2.publishedOn &&
		p2?.publishedOn
			? 1
			: -1,
	);
}

type ArticleData = {
	frontmatter: {
		[key: string]: any;
	};
	content: string;
};

export const loadBlogPost = cache(async (slug: string): Promise<ArticleData> => {
	const rawContent = await readFile(`./content/articles/${slug}.mdx`);

	const { data: frontmatter, content } = matter(rawContent);

	return { frontmatter, content };
});

export const loadPageContent = cache(async (path: string) => {
	if (path === 'mockServiceWorker.js') return;

	const fileNameWithoutSuffix =
		path.endsWith('.mdx') === true ? path.slice(0, -4) : path;

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
