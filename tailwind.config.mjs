/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', "./node_modules/flowbite/**/*.js"],
	theme: {
		colors: {
			Grafito: '#0e0e0e',
			SpringWood: '#fdfbf6',
			TextOpacity: '#898785',
			BluePrimary: '#83beff',
			BlueSecondary: '#6daeff',
		},
		extend: {},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
