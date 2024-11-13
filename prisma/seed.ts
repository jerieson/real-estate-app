// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
	const password = await hash('admin123', 10);

	const admin = await prisma.user.upsert({
		where: { username: 'admin' },
		update: {},
		create: {
			name: 'Admin User',
			username: 'admin',
			password,
			role: 'ADMIN',
		},
	});

	console.log({ admin });

	const user = await prisma.user.upsert({
		where: { username: 'user' },
		update: {},
		create: {
			name: 'Normal User',
			username: 'user',
			password: await hash('user123', 10),
			role: 'USER',
		},
	});

	console.log({ user });
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
