/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        font1: ["CustomFont-Bold", "sans-serif"],
        font2: ["CustomFont-Normal", "sans-serif"],
      },
    },
  },
  plugins: [],
};
