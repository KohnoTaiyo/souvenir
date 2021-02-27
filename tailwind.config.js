module.exports = {
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        gray: {
          350: '#afbab6',
        },
      },
      width: {
        wj: '30rem',
      },
      margin: {
        hn: '42vh',
        hj: '31vh',
      },
      padding: {
        18: '4.5rem',
        pm: '56.25%',
      },
      height: {
        ha: '60vh',
        hb: '80vh',
      },
      inset: {
        lg: '10vw',
        xl: '25vw',
      },
      backgroundSize: {
        110: '110%',
        130: '130%',
        150: '150%',
        180: '180%',
        200: '200%',
        220: '220%',
        250: '250%',
        260: '260%',
      },
      animation: {
        fadeH: 'fadeH .5s',
        fadeL: 'fadeL .5s',
        fadeR: 'fadeR .5s',
      },
      keyframes: {
        fadeH: {
          '0%': { height: '100%' },
          '50%': { height: 0 },
          '100%': { height: '100%' },
        },
        fadeL: {
          '0%': { transform: 'translateX(-120vw)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        fadeR: {
          '0%': { transform: 'translateX(120vw)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
      backgroundImage: (theme) => ({
        'hero-pattern': "url('/hero02.jpg')",
      }),
    },
  },
  variants: {
    extend: {
      scale: ['hover'],
      animation: ['hover'],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.wrap': {
          width: '100%',
          padding: '3rem 5rem 4.5rem',
        },
        '.text-shadow': {
          textShadow: '0px 0px 20px rgba(0,0,0,1)',
        },
        '.title': {
          fontSize: '2.5rem',
          fontWeight: '200',
          letterSpacing: '0.025rem',
          lineHeight: '1',
          marginBottom: '1.5rem',
        },
        '.andmore-position': {
          position: 'absolute',
          left: '8.5rem',
          right: '0',
          bottom: '1.20rem',
          height: '1px',
        },
        'mix-blend': {
          mixBlendMode: 'difference',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}
