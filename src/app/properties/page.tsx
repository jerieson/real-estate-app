'use client';
import { useState } from 'react';
import { PropertyFormData } from '@/types';

export const page = () => {
	return <PropertyForm />;
};

export default function PropertyForm() {
	const [formData, setFormData] = useState<PropertyFormData>({
		title: '',
		description: '',
		price: 0,
		location: '',
		bedrooms: 0,
		bathrooms: 0,
		area: 0,
		features: [],
		images: [],
	});

	const [newFeature, setNewFeature] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [imageAlt, setImageAlt] = useState('');

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const response = await fetch('/api/properties', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			if (!response.ok) throw new Error('Failed to create property');

			// Reset form or redirect
		} catch (error) {
			console.error('Error:', error);
		}
	};

	const addFeature = () => {
		if (newFeature.trim()) {
			setFormData((prev) => ({
				...prev,
				features: [...prev.features, newFeature.trim()],
			}));
			setNewFeature('');
		}
	};

	const addImage = () => {
		if (imageUrl.trim() && imageAlt.trim()) {
			setFormData((prev) => ({
				...prev,
				images: [
					...prev.images,
					{ url: imageUrl.trim(), alt: imageAlt.trim() },
				],
			}));
			setImageUrl('');
			setImageAlt('');
		}
	};

	return (
		<div className="max-w-2xl mx-auto p-6">
			<form onSubmit={handleSubmit} className="space-y-6">
				<div>
					<label className="block text-sm font-medium text-gray-700">
						Title
					</label>
					<input
						type="text"
						value={formData.title}
						onChange={(e) =>
							setFormData((prev) => ({ ...prev, title: e.target.value }))
						}
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
						required
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700">
						Description
					</label>
					<textarea
						value={formData.description}
						onChange={(e) =>
							setFormData((prev) => ({ ...prev, description: e.target.value }))
						}
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
						rows={3}
						required
					/>
				</div>

				<div className="grid grid-cols-2 gap-4">
					<div>
						<label className="block text-sm font-medium text-gray-700">
							Price
						</label>
						<input
							type="number"
							value={formData.price}
							onChange={(e) =>
								setFormData((prev) => ({
									...prev,
									price: parseFloat(e.target.value),
								}))
							}
							className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
							required
						/>
					</div>

					<div>
						<label className="block text-sm font-medium text-gray-700">
							Location
						</label>
						<input
							type="text"
							value={formData.location}
							onChange={(e) =>
								setFormData((prev) => ({ ...prev, location: e.target.value }))
							}
							className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
							required
						/>
					</div>
				</div>

				<div className="grid grid-cols-3 gap-4">
					<div>
						<label className="block text-sm font-medium text-gray-700">
							Bedrooms
						</label>
						<input
							type="number"
							value={formData.bedrooms}
							onChange={(e) =>
								setFormData((prev) => ({
									...prev,
									bedrooms: parseInt(e.target.value),
								}))
							}
							className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
							required
						/>
					</div>

					<div>
						<label className="block text-sm font-medium text-gray-700">
							Bathrooms
						</label>
						<input
							type="number"
							value={formData.bathrooms}
							onChange={(e) =>
								setFormData((prev) => ({
									...prev,
									bathrooms: parseInt(e.target.value),
								}))
							}
							className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
							required
						/>
					</div>

					<div>
						<label className="block text-sm font-medium text-gray-700">
							Area (sq ft)
						</label>
						<input
							type="number"
							value={formData.area}
							onChange={(e) =>
								setFormData((prev) => ({
									...prev,
									area: parseFloat(e.target.value),
								}))
							}
							className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
							required
						/>
					</div>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700">
						Features
					</label>
					<div className="flex gap-2 mt-1">
						<input
							type="text"
							value={newFeature}
							onChange={(e) => setNewFeature(e.target.value)}
							className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
							placeholder="Add a feature"
						/>
						<button
							type="button"
							onClick={addFeature}
							className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
						>
							Add
						</button>
					</div>
					<div className="mt-2 flex flex-wrap gap-2">
						{formData.features.map((feature, index) => (
							<span
								key={index}
								className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-md text-sm"
							>
								{feature}
							</span>
						))}
					</div>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700">
						Images
					</label>
					<div className="space-y-2">
						<input
							type="url"
							value={imageUrl}
							onChange={(e) => setImageUrl(e.target.value)}
							className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
							placeholder="Image URL"
						/>
						<input
							type="text"
							value={imageAlt}
							onChange={(e) => setImageAlt(e.target.value)}
							className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
							placeholder="Image description"
						/>
						<button
							type="button"
							onClick={addImage}
							className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
						>
							Add Image
						</button>
					</div>
					<div className="mt-2 grid grid-cols-3 gap-2">
						{formData.images.map((image, index) => (
							<div key={index} className="relative">
								<img
									src={image.url}
									alt={image.alt}
									className="w-full h-24 object-cover rounded-md"
								/>
							</div>
						))}
					</div>
				</div>

				<button
					type="submit"
					className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
				>
					Create Property
				</button>
			</form>
		</div>
	);
}
