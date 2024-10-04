import path from 'node:path';

import { PrismaClient } from '@prisma/client';

const filePath = path.join(process.cwd(), 'data/dev.db');

const prismaClientSingleton = () => {
	return new PrismaClient({
		datasources: {
			db: {
				url: `file:${filePath}`,
			},
		},
	});
};

declare global {
	var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;

export default prisma;
