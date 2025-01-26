/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'open-sauce': ['Open Sauce', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
        'bebas-neue': ['Bebas Neue', 'system-ui', 'sans-serif']
      },
      colors: {
        'custom-gray': '#9f9f9f',
      }
    },
  },
  plugins: [],
}
