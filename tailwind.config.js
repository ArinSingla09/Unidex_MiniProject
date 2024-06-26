/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        temp: "Quantico",
        temp1: "Exo 2",
        temp2: "Poppins"
      },
    },
  },
  plugins: [],
}

