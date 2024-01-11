import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
	return new PrismaClient({
		datasources: {
			db: {
				url: `file:${process.cwd()}/prisma/data/dev.db`,
			},
		},
	});
};

declare global {
	var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;
