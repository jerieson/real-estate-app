'use client';
import React, { useState } from 'react';
import { MapPin, Bed, Bath, Calendar, Home } from 'lucide-react';
import Link from 'next/link';

// Property Card Component (for listings)
const PropertyCard = ({ id, title, beds, baths, sqft, year, image, price }) => (
	<Link href={`/property/${id}`}>
		<div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
			<div className="relative h-48">
				<img
					src={image || '/api/placeholder/400/300'}
					alt={title}
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="p-4">
				<h3 className="text-lg font-bold mb-2">{title}</h3>
				<div className="flex gap-4 text-sm text-gray-600 mb-3">
					<div className="flex items-center gap-1">
						<Bed size={16} /> {beds}
					</div>
					<div className="flex items-center gap-1">
						<Bath size={16} /> {baths}
					</div>
					<div className="flex items-center gap-1">
						<Home size={16} /> {sqft}
					</div>
				</div>
				<div className="flex justify-between items-center">
					<span className="text-orange-500 font-bold">
						${price.toLocaleString()}
					</span>
					<span className="text-sm text-gray-500">
						${(price / sqft).toFixed(2)}/sq.ft
					</span>
				</div>
			</div>
		</div>
	</Link>
);

// Contact Form Component
const ContactForm = ({ agent }) => (
	<div className="bg-white p-6 rounded-lg shadow-md">
		<div className="flex items-center gap-3 mb-6">
			<img
				src={agent.image || '/api/placeholder/40/40'}
				alt={agent.name}
				className="w-10 h-10 rounded-full"
			/>
			<div>
				<h3 className="font-bold">{agent.name}</h3>
				<p className="text-sm text-gray-600">Sales Agent</p>
			</div>
		</div>
		<form className="space-y-4">
			<input
				type="text"
				placeholder="Name"
				className="w-full p-2 border rounded"
			/>
			<input
				type="tel"
				placeholder="Phone"
				className="w-full p-2 border rounded"
			/>
			<input
				type="email"
				placeholder="Email"
				className="w-full p-2 border rounded"
			/>
			<textarea
				placeholder="Hello, I am interested in..."
				rows={4}
				className="w-full p-2 border rounded"
			/>
			<button className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors">
				Learn more →
			</button>
		</form>
	</div>
);

// Property Feature Component
const PropertyFeature = ({ icon, text }) => (
	<div className="flex items-center gap-2 text-gray-600">
		{icon}
		<span>{text}</span>
	</div>
);

// Property Details Page
const PropertyDetailPage = () => {
	const [selectedImage, setSelectedImage] = useState(0);

	const images = [
		'/api/placeholder/800/600',
		'/api/placeholder/800/600',
		'/api/placeholder/800/600',
		'/api/placeholder/800/600',
		'/api/placeholder/800/600',
		'/api/placeholder/800/600',
	];

	const features = [
		'Air Conditioning',
		'Heating',
		'Indoor Fireplace',
		'Kitchen',
		'Wireless Internet',
		'Free Parking',
		'Pool',
		'Hot Tub',
		'EV Charger',
	];

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Navigation */}
			<nav className="bg-black text-white">
				<div className="container mx-auto px-4 py-4 flex justify-between items-center">
					<Link href="/" className="text-xl font-bold">
						LOGOPSUM
					</Link>
					<div className="flex gap-6">
						<Link href="#" className="hover:text-gray-300">
							Nav Link
						</Link>
						<Link href="#" className="hover:text-gray-300">
							Nav Link
						</Link>
						<Link href="#" className="hover:text-gray-300">
							Nav Link
						</Link>
						<Link href="#" className="hover:text-gray-300">
							Nav Link
						</Link>
					</div>
					<button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600">
						Work with us →
					</button>
				</div>
			</nav>

			{/* Property Header */}
			<div className="bg-black text-white py-4">
				<div className="container mx-auto px-4">
					<h1 className="text-2xl font-bold">Modern House</h1>
					<div className="flex items-center gap-2 text-gray-300">
						<MapPin size={16} />
						<span>3002 Foster Ave, Brooklyn, NY 1210, USA</span>
					</div>
					<div className="flex justify-between items-center mt-2">
						<span className="text-2xl font-bold">$450,000</span>
						<span className="text-gray-300">$2,800/sq.ft</span>
					</div>
				</div>
			</div>

			<div className="container mx-auto px-4 py-8">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Main Content */}
					<div className="lg:col-span-2">
						{/* Image Gallery */}
						<div className="mb-8">
							<div className="rounded-lg overflow-hidden mb-4">
								<img
									src={images[selectedImage]}
									alt="Property"
									className="w-full h-[400px] object-cover"
								/>
							</div>
							<div className="grid grid-cols-6 gap-2">
								{images.map((img, idx) => (
									<button
										key={idx}
										onClick={() => setSelectedImage(idx)}
										className={`rounded-lg overflow-hidden ${
											selectedImage === idx ? 'ring-2 ring-orange-500' : ''
										}`}
									>
										<img
											src={img}
											alt={`Thumbnail ${idx + 1}`}
											className="w-full h-20 object-cover"
										/>
									</button>
								))}
							</div>
						</div>

						{/* Details */}
						<div className="bg-white rounded-lg p-6 mb-8">
							<h2 className="text-xl font-bold mb-4">Details</h2>
							<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
								<PropertyFeature icon={<Bed size={20} />} text="4 Beds" />
								<PropertyFeature icon={<Bath size={20} />} text="2 Baths" />
								<PropertyFeature icon={<Home size={20} />} text="2 Garages" />
								<PropertyFeature
									icon={<Calendar size={20} />}
									text="Built 2007"
								/>
							</div>
						</div>

						{/* Description */}
						<div className="bg-white rounded-lg p-6 mb-8">
							<h2 className="text-xl font-bold mb-4">Description</h2>
							<p className="text-gray-600 mb-4">
								At vero eos et iusto odio dignissimos ducimus, qui blanditiis
								praesentium voluptatum deleniti atque corrupti, quos dolores et
								quas molestias excepturi sint, obcaecati cupiditate non
								provident, similique sunt in culpa, qui officia deserunt
								mollitia animi, id est laborum et dolorum fuga.
							</p>
						</div>

						{/* Features */}
						<div className="bg-white rounded-lg p-6">
							<h2 className="text-xl font-bold mb-4">Features</h2>
							<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
								{features.map((feature, idx) => (
									<div key={idx} className="flex items-center gap-2">
										<span className="w-2 h-2 bg-orange-500 rounded-full"></span>
										<span>{feature}</span>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Sidebar */}
					<div className="lg:col-span-1">
						<ContactForm
							agent={{
								name: 'Kayley Hall',
								image: '/api/placeholder/40/40',
							}}
						/>
					</div>
				</div>

				{/* Similar Listings */}
				<div className="mt-16">
					<h2 className="text-2xl font-bold mb-8">Similar listings</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{[1, 2, 3, 4].map((id) => (
							<PropertyCard
								key={id}
								id={id}
								title="Malto House"
								beds={4}
								baths={2}
								sqft={2000}
								year={2007}
								price={450000}
								image="/api/placeholder/400/300"
							/>
						))}
					</div>
				</div>
			</div>

			{/* Footer */}
			<footer className="bg-black text-white mt-16 py-16">
				<div className="container mx-auto px-4">
					<div className="flex justify-between items-center mb-8">
						<h2 className="text-2xl font-bold">
							Make your dreams a{' '}
							<span className="text-orange-500">reality</span>
						</h2>
						<button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600">
							Work with us →
						</button>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						<div>
							<img src="/api/placeholder/120/40" alt="Logo" className="mb-4" />
							<div className="flex gap-4">
								<a href="#" className="text-gray-400 hover:text-white">
									Facebook
								</a>
								<a href="#" className="text-gray-400 hover:text-white">
									Twitter
								</a>
								<a href="#" className="text-gray-400 hover:text-white">
									Instagram
								</a>
							</div>
						</div>
						{[1, 2, 3].map((i) => (
							<div key={i}>
								<h3 className="font-bold mb-4">Column Heading</h3>
								<ul className="space-y-2">
									<li>
										<a href="#" className="text-gray-400 hover:text-white">
											Link goes here
										</a>
									</li>
									<li>
										<a href="#" className="text-gray-400 hover:text-white">
											Link goes here
										</a>
									</li>
									<li>
										<a href="#" className="text-gray-400 hover:text-white">
											Link goes here
										</a>
									</li>
								</ul>
							</div>
						))}
					</div>
				</div>
			</footer>
		</div>
	);
};

export default PropertyDetailPage;
