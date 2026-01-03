/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['SF Pro Display', 'sans-serif'],
      },
      colors: {
        'apple-gray': '#f5f5f7',
        'apple-dark': '#1d1d1f',
      }
    },
  },
  plugins: [],
}