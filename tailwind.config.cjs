/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark-color": "#241120",
        "secondary-gray-color": "#A5A5A5",
      },
      boxShadow: {
        "gray-light-shadow": "0px 9px 45px 15px rgba(187, 187, 187, 0.23)"
      }
    },
    fontFamily: {
      manrope: ["Manrope", "sans-serif"],
    }
  },
  plugins: [],
}
