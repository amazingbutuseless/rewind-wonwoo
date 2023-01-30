/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: { heading: ['Leckerli One', 'cursive'], body: ['Noto Sans KR', 'sans-serif'] },
		fontSize: { sm: '1.2rem', base: '1.6rem', lg: '2rem' },
		extend: {}
	},
	plugins: []
};
