import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xsm: '500px',
        sm: '600px',
        md: '690px',
        lg: '988px',
        xl: '1019px',
        xxl: '1265px',
        xxxl: '1440px',
        kh: '1517px',
        kj: '1700px',
        kx: '1821px',
        kl: '2049px',
      },
      colors: {
        textGray: '#71767b',
        textGrayLight: '#e7e9ea',
        borderGray: '#2f3336',
        inputGray: '#202327',
        iconBlue: '#1d9bf0',
        bgIconBlue: '#031018',
        iconGreen: '#00ba7c',
        iconPink: '#f91880',
      },
    },
  },
  plugins: [],
} satisfies Config;
