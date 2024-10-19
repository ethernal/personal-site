import prisma from '@/lib/prismaClient';

const PublicationManager = {
	findAllPublications: async function findAllPublications() {
		return await prisma.publication.findMany({
			include: {
				category: true,
				keywords: true,
				status: true,
				publicationType: true,
				publicationSeries: true,
				publicationAuthors: {
					include: {
						author: true,
					},
				},
			},
			orderBy: {
				publishedOn: 'desc',
			},
		});
	},

	getPublication: async function getPublication(pageSlug: string) {
		return await prisma.publication.findFirst({
			where: {
				AND: [
					{
						slug: pageSlug,
					},
					{
						publishedOn: {
							lte: new Date(),
						},
					},
				],
			},
			include: {
				category: true,
				keywords: true,
				status: true,
				publicationType: true,
				publicationSeries: true,
				publicationAuthors: {
					include: {
						author: true,
					},
				},
			},
		});
	},
};

export { PublicationManager };
