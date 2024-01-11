import prisma from '@/lib/prismaClient';

import { getArticles } from '../helpers/fs-helpers';
import { removeDiacritics } from './utils';

const PUBLICATION_TYPE = Object.freeze({
	ARTICLE: 'article',
	GEM: 'gem',
});

export async function loadMDXtoDB() {
	// const allArticles = await prisma.publication.findMany();
	const articles = await getArticles();

	// add articles to DB
	if (articles && articles?.length > 0) {
		console.info(`Seeding ${articles?.length} articles...`);
		for (const article of articles) {
			console.info(`Creating article: "${article?.frontmatter?.title}"...`);

			const keywords = article?.frontmatter?.keywords ?? [];
			const series = article?.frontmatter?.series;
			const orderInSeries = article?.frontmatter?.seriesPart;

			let keywordsFromDB = undefined;

			if (keywords && keywords?.length > 0) {
				console.info(`Adding keywords to the article...`);

				for (const keyword of keywords) {
					keywordsFromDB = await prisma.keyword.upsert({
						where: {
							name: keyword,
						},
						update: {
							name: keyword,
						},
						create: {
							name: keyword,
						},
					});
				}
			}

			let seriesFromDB = undefined;

			if (series) {
				console.info(`Adding series "${series}" to the article.`);

				seriesFromDB = await prisma.series.upsert({
					where: {
						name: series,
					},
					update: {
						name: series,
					},
					create: {
						name: series,
					},
				});
			}

			const status =
				article.frontmatter?.published === true ? 'public' : 'draft';

			console.info(`Article status: ${status}`);

			const authorFirstName = removeDiacritics(
				article.frontmatter?.author.split(' ')[0],
			);
			const authorLastName = removeDiacritics(
				article.frontmatter?.author.split(' ')[1],
			);

			const publicationType = PUBLICATION_TYPE.ARTICLE;

			console.info(`Adding Article to the database...`);

			const publicationFromDB = await prisma.publication.upsert({
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
					keywords: {
						connect: keywordsFromDB,
					},

					category: {
						connectOrCreate: {
							where: {
								name: article?.frontmatter?.category ?? 'Publication',
							},
							create: {
								name: article?.frontmatter?.category ?? 'Publication',
							},
						},
					},
					status: {
						connectOrCreate: {
							where: {
								name: status,
							},
							create: {
								name: status,
							},
						},
					},
					publicationType: {
						connectOrCreate: {
							where: {
								name: publicationType,
							},
							create: {
								name: publicationType,
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
					keywords: {
						connect: keywordsFromDB,
					},

					category: {
						connectOrCreate: {
							where: {
								name: article.frontmatter.category,
							},
							create: {
								name: article.frontmatter.category,
							},
						},
					},
					status: {
						connectOrCreate: {
							where: {
								name: status,
							},
							create: {
								name: status,
							},
						},
					},
					publicationType: {
						connectOrCreate: {
							where: {
								name: publicationType,
							},
							create: {
								name: publicationType,
							},
						},
					},
				},
			});

			//  publication is in now connect the author to it

			let authorFromDB = await prisma.user.findFirst({
				where: {
					AND: [
						{
							firstName: authorFirstName,
						},
						{ lastName: authorLastName },
					],
				},
			});

			if (!authorFromDB) {
				authorFromDB = await prisma.user.create({
					data: {
						firstName: authorFirstName,
						lastName: authorLastName,
					},
				});
				console.info(
					`Added author to the database: ${authorFromDB?.firstName} ${authorFromDB?.lastName}.`,
				);
			} else {
				console.info(
					`Author found in the database: ${authorFromDB?.firstName} ${authorFromDB?.lastName}.`,
				);
			}

			// check if the author is already connected to the publication
			const publicationAuthor = await prisma.publicationAuthor.findFirst({
				where: {
					AND: [
						{
							publicationId: publicationFromDB.id,
						},
						{
							userId: authorFromDB.id,
						},
					],
				},
			});

			// if not create it
			if (!publicationAuthor) {
				console.info(
					`Adding author ${authorFromDB?.firstName} ${authorFromDB?.lastName} to publication ${publicationFromDB?.title}.`,
				);

				await prisma.publicationAuthor.create({
					data: {
						publication: {
							connect: {
								id: publicationFromDB.id,
							},
						},
						author: {
							connect: {
								id: authorFromDB.id,
							},
						},
					},
				});
			}

			if (seriesFromDB) {
				console.info(
					`Adding publication ${publicationFromDB?.title} to series ${seriesFromDB?.name}.`,
				);
				await prisma.publicationSeries.create({
					data: {
						series: {
							connect: {
								id: seriesFromDB.id,
							},
						},
						publication: {
							connect: {
								id: publicationFromDB.id,
							},
						},
						orderInSeries: orderInSeries,
					},
				});
			}
		}
	}
}
