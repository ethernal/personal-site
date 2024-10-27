import prisma from '@/lib/prismaClient';

const PublicationManager = {
	findAllPublications: async function findAllPublications() {

		const isDevelopment =
			process.env.NODE_ENV === 'development' ||
			process.env.VERCEL_ENV !== 'development';
		let statusToRetrieve = [{ status: { name: 'public' } }];

		if (isDevelopment) {
			statusToRetrieve = [
				{ status: { name: 'public' } },
				{ status: { name: 'draft' } },
				{ status: { name: 'private' } },
			];
		}

		return await prisma.publication.findMany({
			where: {
				publishedOn: {
					lte: new Date(),
				},
				OR: statusToRetrieve,
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
						status: {
							name: 'public',
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
