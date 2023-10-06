/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    colors: {
      brand: "#0169F0",
      brand1: "#01C2FF",
      back: "#0E2B83",
      borbot: "#1972E2",
      services: "#192161",
      links: "#000211",
      primary: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
        900: "#1e3a8a",
        950: "#172554",
      },
    },

    extend: {
      backgroundColor: {
        secondary: "#000211",
      },
    },
  },
  plugins: [],
};
