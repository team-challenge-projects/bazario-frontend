import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      full: '1920px',
    },
    extend: {
      shadow: {
        primaryShadow: [
          '0px 2px 3px 0px #0000004D',
          '0px 6px 10px 4px #00000026',
        ],
        secondaryShadow: [
          '0px 1px 3px 0px #0000004D',
          ' 0px 4px 8px 3px #00000026',
        ],
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
      colors: {
        primary: '#000013',
        secondary: '#DFE9E8',
        'custom-mint': '#BCF0E6',
        'custom-pink': '#ECBABB',
        'custom-yellow': '#FFE984',
        'custom-light-grey': '#C0C0C0',
        'custom-dark-grey': '#55615F',
        'custom-half-dark-grey': '#55615F66',
      },
      backgroundImage: {
        error: "url('/public/BazarioBig.svg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
