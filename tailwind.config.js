/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#173753",
        secondary: "#0D2D49",
        light_colour: "#E6E6E6",
        danger: "#DC2626",
        yellow: "#DAA520",
      },
    },
    fontFamily: {
      brand: ["Golos Text", "sans-serif"],
    },
  },
  plugins: [],
};
