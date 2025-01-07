/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#9333ea',
          light: '#a855f7',
          dark: '#7e22ce'
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #3366FF, #8B5CF6, #D946EF)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};