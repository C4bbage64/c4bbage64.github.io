/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}', './public/**/*.{html,js}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
				body: ['Inter', 'system-ui', 'sans-serif'],
			},
			colors: {
				brand: {
					primary: '#7c3aed',
					secondary: '#22d3ee',
					muted: '#94a3b8',
				},
			},
			boxShadow: {
				soft: '0 20px 60px rgba(15, 23, 42, 0.15)',
			},
			backgroundImage: {
				'grid-light': 'radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.12) 1px, transparent 0)',
				'grid-dark': 'radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.2) 1px, transparent 0)',
			},
		},
	},
	plugins: [],
};
