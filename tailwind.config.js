/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './App.{js,jsx,ts,tsx}',
    './<custom directory>/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'arawMatic-default': '#FFFFED',
        'button-default': '#EDEDFF',
        'signIn-default': '#50C2C9',
      },
    },
  },
  plugins: [],
}
