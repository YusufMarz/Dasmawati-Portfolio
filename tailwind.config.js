/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient-x': 'gradient-x 2.5s linear infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%': { 'background-position': '0%' },
          '100%': { 'background-position': '200%' },
        },
      },
      backgroundSize: {
        '200%': '200%',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(255, 255, 255, 0.3)',
      },
    },
  },
  plugins: [],
};
