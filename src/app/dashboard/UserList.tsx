// src/app/dashboard/UserList.tsx
'use client';

import { useState } from 'react';

interface User {
	id: string;
	name: string;
	username: string;
	role: string;
}

interface UserListProps {
	users: User[];
	currentUserRole: string;
}

export default function UserList({ users, currentUserRole }: UserListProps) {
	const [editingUser, setEditingUser] = useState<User | null>(null);

	async function handleUpdate(user: User) {
		const response = await fetch(`/api/users/${user.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: user.name,
				role: user.role,
			}),
		});

		if (response.ok) {
			setEditingUser(null);
			window.location.reload();
		}
	}

	async function handleDelete(userId: string) {
		const confirmed = window.confirm(
			'Are you sure you want to delete this user?',
		);

		if (!confirmed) return;

		const response = await fetch(`/api/users/${userId}`, {
			method: 'DELETE',
		});

		if (response.ok) {
			window.location.reload();
		}
	}

	return (
		<div className="space-y-4">
			{users.map((user) => (
				<div key={user.id} className="border p-4 rounded">
					{editingUser?.id === user.id ? (
						<div className="space-y-2">
							<input
								type="text"
								value={editingUser.name}
								onChange={(e) =>
									setEditingUser({
										...editingUser,
										name: e.target.value,
									})
								}
								className="p-2 border rounded"
							/>
							{currentUserRole === 'ADMIN' && (
								<select
									value={editingUser.role}
									onChange={(e) =>
										setEditingUser({
											...editingUser,
											role: e.target.value,
										})
									}
									className="p-2 border rounded ml-2"
								>
									<option value="USER">User</option>
									<option value="ADMIN">Admin</option>
								</select>
							)}
							<div className="space-x-2">
								<button
									onClick={() => handleUpdate(editingUser)}
									className="bg-green-500 text-white px-4 py-2 rounded"
								>
									Save
								</button>
								<button
									onClick={() => setEditingUser(null)}
									className="bg-gray-500 text-white px-4 py-2 rounded"
								>
									Cancel
								</button>
							</div>
						</div>
					) : (
						<div className="flex justify-between items-center">
							<div>
								<p className="font-bold">{user.name}</p>
								<p className="text-sm text-gray-600">{user.username}</p>
								<p className="text-sm text-gray-600">Role: {user.role}</p>
							</div>
							<div className="space-x-2">
								<button
									onClick={() => setEditingUser(user)}
									className="bg-blue-500 text-white px-4 py-2 rounded"
								>
									Edit
								</button>
								{currentUserRole === 'ADMIN' && (
									<button
										onClick={() => handleDelete(user.id)}
										className="bg-red-500 text-white px-4 py-2 rounded"
									>
										Delete
									</button>
								)}
							</div>
						</div>
					)}
				</div>
			))}
		</div>
	);
}
