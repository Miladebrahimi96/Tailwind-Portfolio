/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 2s linear infinite',
      },
      shadow: {
        'myShadow' : '0px 0px 31px 0px rgba(204,204,204,0.34)'
      }
    },
  },
  plugins: [],
}
