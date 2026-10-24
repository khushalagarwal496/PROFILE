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
        lime: '#c7f36b',
      },
    },
  },
  plugins: [],
}
