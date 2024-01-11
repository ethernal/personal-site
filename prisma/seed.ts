import prisma from '@/lib/prismaClient';
import { PublicationManager } from '@/manager/PublicationManager';

import { loadMDXtoDB } from '../src/utils/mdxToDb';

async function main() {
	console.log('Looking for user in DB...');
	const userFromDB = await prisma.user.findFirst({
		where: {
			AND: [
				{
					firstName: 'Sebastian',
				},
				{ lastName: 'Pieczynski' },
			],
		},
	});

	if (!userFromDB) {
		console.log('Creating default user in DB...');

		await prisma.user.create({
			data: {
				firstName: 'Sebastian',
				lastName: 'Pieczynski',
			},
		});
	} else {
		console.log('Default user found in the DB...');
	}

	const publicationStatuses = ['draft', 'public', 'private'];

	console.log('Creating default statuses for publications...');

	const pStatuses = await prisma.$transaction(
		publicationStatuses.map((status) =>
			prisma.publicationStatus.upsert({
				where: { name: status },
				create: {
					name: status,
				},
				update: {
					name: status,
				},
			}),
		),
	);

	const publicationTypes = ['article', 'gem'];
	console.log('Creating default types for publications...');
	const pTypes = await prisma.$transaction(
		publicationTypes.map((type) =>
			prisma.publicationType.upsert({
				where: { name: type },
				create: {
					name: type,
				},
				update: {
					name: type,
				},
			}),
		),
	);

	console.log('Loading MDX content...');

	await loadMDXtoDB();
}

console.info('Seeding the database');
main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
