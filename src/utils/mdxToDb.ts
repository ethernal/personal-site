import { PrismaClient } from '@prisma/client';

import { getArticles } from '../helpers/fs-helpers';

const prisma = new PrismaClient();

export async function loadMDXtoDB() {
	// const allArticles = await prisma.publication.findMany();
	const articles = await getArticles();

	// add articles to DB

	if (articles && articles?.length > 0) {
		for (const article of articles) {
			await prisma.publication.upsert({
				where: {
					slug: article.frontmatter.slug,
				},
				update: {
					slug: article.frontmatter.slug,
					title: article.frontmatter.title,
					abstract: article.frontmatter.abstract,
					publishedOn: article.frontmatter.publishedOn,
					image: article.frontmatter.image,
					imageAlt: article.frontmatter.imageAlt,
					content: article.content,
					status: {
						connectOrCreate: {
							where: {
								name: article.frontmatter?.status ?? 'draft',
							},
							create: {
								name: article.frontmatter?.status ?? 'draft',
							},
						},
					},
					author: {
						connectOrCreate: {
							where: {
								email:
									article.frontmatter?.authorId ?? 'sebee.website@gmail.com',
							},
							create: {
								email:
									article.frontmatter?.authorId ?? 'sebee.website@gmail.com',
								firstName: 'Sebastian',
								lastName: 'Pieczyński',
							},
						},
					},
				},
				create: {
					slug: article.frontmatter.slug,
					title: article.frontmatter.title,
					abstract: article.frontmatter.abstract,
					publishedOn: article.frontmatter.publishedOn,
					image: article.frontmatter.image,
					imageAlt: article.frontmatter.imageAlt,
					content: article.content,
					status: {
						connectOrCreate: {
							where: {
								name: article.frontmatter?.status ?? 'draft',
							},
							create: {
								name: article.frontmatter?.status ?? 'draft',
							},
						},
					},
					author: {
						connectOrCreate: {
							where: {
								email:
									article.frontmatter?.authorId ?? 'sebee.website@gmail.com',
							},
							create: {
								email:
									article.frontmatter?.authorId ?? 'sebee.website@gmail.com',
								firstName: 'Sebastian',
								lastName: 'Pieczyński',
							},
						},
					},
				},
			});
		}
	}
}
