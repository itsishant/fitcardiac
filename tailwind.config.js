/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          teal: '#D62839', // brand red
          'teal-dark': '#A4161A',
          green: '#1F4E79', // brand navy
          'green-light': '#E9EFF9',
        },
        secondary: {
          gray: '#0F172A',
          'gray-light': '#6B7280',
        },
      },
    },
  },
  plugins: [],
}

