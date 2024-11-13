// src/app/auth/error/page.tsx
'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function AuthError() {
	const searchParams = useSearchParams();
	const error = searchParams.get('error');

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				<div>
					<h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
						Authentication Error
					</h2>
					<div className="mt-2 text-center text-sm text-gray-600">
						{error === 'CredentialsSignin' ? (
							<p>Invalid username or password.</p>
						) : (
							<p>{error || 'An error occurred during authentication.'}</p>
						)}
					</div>
					<div className="mt-5 text-center">
						<Link
							href="/login"
							className="font-medium text-blue-600 hover:text-blue-500"
						>
							Back to Login
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
