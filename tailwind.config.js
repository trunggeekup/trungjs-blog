const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: "jit",
  content: ["src/**/*.{ts,tsx,js,jsx.css}"],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        primary: { ...colors.teal, DEFAULT: colors.teal[600] },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
