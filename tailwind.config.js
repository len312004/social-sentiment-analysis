/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        brand: {
          blue: "#1540C8",
          light: "#1B46D8",
          dark: "#0E2C9B",
        },
      },
    },
  },
  plugins: [],
};
