/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rockwell: ['Rockwell', 'serif'],
        inter: ['Inter', 'sans-serif'],
        poppin: ['Poppins' , 'sans-serif'],
        poetsen: ['Poetsen One', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
