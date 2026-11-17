/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eff6f2",
          700: "#285b47",
          800: "#1d4434",
        },
      },
    },
  },
  plugins: [],
};
