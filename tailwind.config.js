/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      colors: {
        ink: '#0b0d0c',
        panel: '#121513',
        lime: {
          DEFAULT: '#c7f36b',
          50: '#f7fee7',
          100: '#ecfccb',
          200: '#d9f99d',
          300: '#c7f36b',
          400: '#a3e635',
          500: '#84cc16',
        },
      },
    },
  },
  plugins: [],
}
