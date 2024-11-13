// src/components/Navbar.tsx
'use client';

import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface NavbarProps {
	user: {
		name?: string | null;
		username: string;
		role: string;
	};
}

export default function Navbar({ user }: NavbarProps) {
	const router = useRouter();

	const handleLogout = async () => {
		await signOut({
			redirect: false,
		});
		router.push('/login');
	};

	return (
		<nav className="bg-white shadow-lg">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex items-center">
						<span className="text-gray-800 text-lg font-semibold">
							Dashboard
						</span>
					</div>

					<div className="flex items-center space-x-4">
						<div className="text-sm">
							<span className="text-gray-500">Welcome, </span>
							<span className="text-gray-900 font-medium">
								{user.name || user.username}
							</span>
							<span className="ml-2 px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
								{user.role}
							</span>
						</div>
						<button
							onClick={handleLogout}
							className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
						>
							Logout
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
}
