// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Build your palette here
        lime: colors.lime
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
  ]
};
