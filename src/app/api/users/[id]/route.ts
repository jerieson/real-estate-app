// src/app/api/users/[id]/route.ts
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';
import { Roles, isValidRole } from '@/types';

export async function PUT(
	req: Request,
	{ params }: { params: { id: string } },
) {
	try {
		const session = await getServerSession(authOptions);

		if (!session) {
			return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
		}

		const { name, role } = await req.json();

		// Only admins can update roles
		if (role) {
			if (session.user.role !== Roles.ADMIN) {
				return NextResponse.json(
					{ error: 'Unauthorized to update role' },
					{ status: 403 },
				);
			}

			if (!isValidRole(role)) {
				return NextResponse.json({ error: 'Invalid role' }, { status: 400 });
			}
		}

		const user = await prisma.user.update({
			where: { id: params.id },
			data: {
				name,
				...(role && { role }),
			},
		});

		return NextResponse.json({
			id: user.id,
			name: user.name,
			username: user.username,
			role: user.role,
		});
	} catch (error) {
		return NextResponse.json({ error: 'Error updating user' }, { status: 500 });
	}
}

export async function DELETE(
	req: Request,
	{ params }: { params: { id: string } },
) {
	try {
		const session = await getServerSession(authOptions);

		if (!session || session.user.role !== Roles.ADMIN) {
			return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
		}

		await prisma.user.delete({
			where: { id: params.id },
		});

		return NextResponse.json({ message: 'User deleted' });
	} catch (error) {
		return NextResponse.json({ error: 'Error deleting user' }, { status: 500 });
	}
}
