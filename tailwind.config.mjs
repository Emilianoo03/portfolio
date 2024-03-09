/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundColor: {
				primary: '#EEE9DA',
				secondary: '#6096B4',
				tertiary: '#93BFCF',
				quaternary: '#BDCDD6',
			}
		},
	},
	plugins: [],
}
