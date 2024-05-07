const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Playfair Display", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        grey: "#777777",
        Lightgrey: "#161616",
      },
    },
  },
  plugins: [],
};
