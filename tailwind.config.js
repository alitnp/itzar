/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			borderColor: "var(--border-color-base)",
			colors: {
				"t-primary-color": "var(--primary-color)",
				"t-secondary-color": "var(--secondary-color)",
				"t-success-color": "var(--success-color)",
				"t-warning-color": "var(--warning-color)",
				"t-error-color": "var(--error-color)",
				"t-bg-color": "var(--bg-color)",
				"t-bg-gray": "var(--bg-gray)",
				"t-text-color": "var(--text-color)",
				"t-secondary-text-color": "var(--secondary-text-color)",
				"t-border-color-50": "var(--border-color-50)",
				"t-border-color-24": "var(--border-color-24)",
				"t-border-color-16": "var(--border-color-16)",
			},
		},
	},
	plugins: [],
};
