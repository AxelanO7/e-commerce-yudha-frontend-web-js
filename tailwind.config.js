/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      textColor: {
        brown: "#8D6820",
      },
      backgroundColor: {
        cream: "#FFF7B0",
        brown: "#564C1B",
        orange: "#FBC967",
        purple: "#883DCF",
      },
    },
  },
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
};
