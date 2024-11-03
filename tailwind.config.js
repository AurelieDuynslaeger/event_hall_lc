// eslint-disable-next-line @typescript-eslint/no-require-imports
const { nextui } = require("@nextui-org/react");
/* eslint-disable @typescript-eslint/no-require-imports */
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,jsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/react/dist/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {

		},
	},
	plugins: [nextui()],
};

export default config;
