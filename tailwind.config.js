/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandBlack: "#111111",
        brandMaroon: "#7A1E1E",
        brandOrange: "#F97316",
        brandOrangeHover: "#EA580C",
        brandMaroonHover: "#5C1515",
      },

      fontFamily: {
        body: ["Poppins", "sans-serif"],
        heading: ["Anton", "sans-serif"],
      },
    },
  },
  plugins: [],
};