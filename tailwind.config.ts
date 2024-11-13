import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			sm: '576px',
			// => @media (min-width: 576px) { ... }

			md: '960px',
			// => @media (min-width: 960px) { ... }

			lg: '1440px',
			// => @media (min-width: 1440px) { ... }
		},
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
			},
			transitionProperty: {
				opacity: 'opacity',
			},
		},
	},
	plugins: [],
};
export default config;
