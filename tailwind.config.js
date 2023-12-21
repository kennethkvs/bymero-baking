/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          100: "#F2F2F2",
          200: "#A5A5A5",
          300: "#524632",
        },
        accent: {
          100: "#1E3888",
          200: "#172500",
        },
      },
    },
  },
  plugins: [],
};
