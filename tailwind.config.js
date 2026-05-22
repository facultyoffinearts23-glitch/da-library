/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#0a3d7a',
        'primary-blue-dark': '#0c2e5c',
        'accent-gold': '#d4af37',
        'accent-light': '#f0f6ff',
      },
      fontFamily: {
        'cairo': ['Cairo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
