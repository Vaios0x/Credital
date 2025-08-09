/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0ea5e9',
          600: '#0284c7',
        },
      },
      borderRadius: {
        xl: '12px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(0,0,0,.06)',
        md: '0 8px 24px rgba(0,0,0,.08)',
      },
    },
  },
  plugins: [],
}


