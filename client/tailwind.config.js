/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          100: "#cef5dd",
          200: "#9cebbb",
          300: "#6be099",
          400: "#39d677",
          500: "#08cc55",
          600: "#06a344",
          700: "#057a33",
          800: "#035222",
          900: "#022911",
        },
        red: {
          100: "#f6cdcd",
          200: "#ee9a9a",
          300: "#e56868",
          400: "#dd3535",
          500: "#d40303",
          600: "#aa0202",
          700: "#7f0202",
          800: "#550101",
          900: "#2a0101",
        },
        black: {
          100: "#cccccc",
          200: "#999999",
          300: "#666666",
          400: "#333333",
          500: "#131313",
          600: "#000000",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
