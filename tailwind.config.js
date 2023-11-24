/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1170',
      },
      colors: {
        'primary-color': '#FF7628',
        'title-color': '#192239',
      },
    },
  },
  plugins: [],
}