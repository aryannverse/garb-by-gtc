/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FDFBF7',
          100: '#FAF7F2', // signature ground
          200: '#F4EFE6', // subtle container
          300: '#E8E1D3', // delicate borders
          400: '#D9CFC0',
          500: '#C7BBA8',
        },
        sand: {
          100: '#F3ECE3',
          200: '#E5D8C7',
          300: '#D5C4AF',
          400: '#C2AC94',
          500: '#A68D74',
          600: '#8A7159',
        },
        brown: {
          900: '#1A120D', // deepest ink
          850: '#221912',
          800: '#2D2119', // rich espresso text
          700: '#3F3025',
          600: '#5C483A', // secondary body
          500: '#7B6453',
          400: '#9E8774',
          300: '#C3B1A0',
        },
        terracotta: {
          600: '#964B35',
          700: '#7E3C29',
        }
      },
      fontFamily: {
        display: ['Marcellus', 'Georgia', 'serif'],
        body: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        luxury: '0.12em',
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(45, 33, 25, 0.05)',
        'elevated': '0 12px 36px -6px rgba(45, 33, 25, 0.08)',
        'modal': '0 24px 60px -12px rgba(26, 18, 13, 0.25)',
      }
    },
  },
  plugins: [],
};
