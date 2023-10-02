/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      brand: "#0169F0",
      brand1: "#01C2FF",
      back: "#0E2B83",
      borbot: "#1972E2",
      services: "#192161",
      links: "#000211;",
    },

    extend: {
      backgroundColor: {
        secondary: "#000211",
      },
    },
  },
  plugins: [],
};
