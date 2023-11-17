// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

import { loadMDXtoDB } from '../src/utils/mdxToDb';

const prisma = new PrismaClient();

async function main() {
	await prisma.user.upsert({
		where: { email: `testemail@gmail.com` },
		create: {
			email: `testemail@gmail.com`,
			firstName: 'test',
			lastName: 'test',
		},
		update: {
			firstName: 'test',
			lastName: 'test',
		},
	});
}

console.log('Seeding the database');
main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
