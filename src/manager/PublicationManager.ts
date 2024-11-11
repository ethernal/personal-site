import prisma from '@/lib/prismaClient';

const isDevelopment =
	process.env.NODE_ENV === 'development' ||
	process.env.VERCEL_ENV !== 'development';

let statusToRetrieve = [{ status: { name: 'public' } }];
let publishedDate = new Date();

if (isDevelopment) {
	publishedDate = new Date('9999-12-31'); // show the posts from the future in dev mode
	statusToRetrieve = [
		{ status: { name: 'public' } },
		{ status: { name: 'draft' } },
		{ status: { name: 'private' } },
	];
}

const PublicationManager = {
	findAllPublications: async function findAllPublications() {
		return await prisma.publication.findMany({
			where: {
				publishedOn: {
					lte: publishedDate,
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
		isDevelopment;

		return await prisma.publication.findFirst({
			where: {
				AND: [
					{
						slug: pageSlug,
					},
					{
						publishedOn: {
							lte: publishedDate,
						},
						OR: statusToRetrieve,
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
