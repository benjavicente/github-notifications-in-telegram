import { env } from '$env/dynamic/private';
import { PrismaClient } from '@prisma/client/edge';

export const prisma = new PrismaClient({
	datasources: {
		db: {
			url: env.DATABASE_URL
		}
	}
});
