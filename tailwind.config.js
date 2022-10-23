/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {},
    screens:{
      'tablet': '920px',
      'lg': '1024px',
      '2lg': '1124px',
      'xl': '1280px',
      'md': '768px',
      'sm': '640px',
      'mb': '500px',
    },
  },
  plugins: [],
  purge: ['../index.html','./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
}
