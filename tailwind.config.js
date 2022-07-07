/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "mint-green": "#9de2d9",
        "warm-pink": "#ffb1b9",
        "warm-yellow": "#f0cc96",
      },
    },
  },
  plugins: [],
};
