/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {	
			backgroundImage: {
				'custom-gradient': 'linear-gradient(90deg, rgba(9,6,50,0.8855917366946778) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
			  },		
		},
	},
	plugins: [],
}
