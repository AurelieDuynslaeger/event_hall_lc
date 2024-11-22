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
			colors: {
				primary: "#F1FFFA",       // Police body (dark text color)
				background: "#0D0A0B",    // Background color
				secondary: "#68462B",     // Secondary color
				accent: "#5E807F"         // Accent color
			},
			fontFamily: {
				stretch: ['var(--font-stretch)'],
			}
		},
	},
	plugins: [nextui(), addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g., var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
	const allColors = theme("colors");
	const newVars = Object.fromEntries(
		Object.entries(allColors).flatMap(([color, shades]) =>
			typeof shades === "string"
				? [[`--${color}`, shades]]
				: Object.entries(shades).map(([shade, hex]) => [`--${color}-${shade}`, hex])
		)
	);

	addBase({
		":root": newVars,
	});
}


export default config;
