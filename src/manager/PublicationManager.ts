import prisma from '@/lib/prismaClient';

export const PublicationManager = {
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
};
