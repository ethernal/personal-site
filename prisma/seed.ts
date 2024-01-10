// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

import { loadMDXtoDB } from '../src/utils/mdxToDb';

const prisma = new PrismaClient();

async function main() {
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
		await prisma.user.create({
			data: {
				firstName: 'Sebastian',
				lastName: 'Pieczynski',
			},
		});
	}

	const publicationStatuses = ['draft', 'public', 'private'];

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
