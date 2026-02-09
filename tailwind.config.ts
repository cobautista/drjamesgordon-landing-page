import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: '#9A2E2E',
          light: '#A73939',
          dark: '#7A2323',
        },
        gray: {
          bg: '#E8E8E8',
          light: '#ECECEC',
          dark: '#2B2B2B',
        },
        text: {
          dark: '#1A1A1A',
          light: '#FFFFFF',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        azosans: ['AzoSans Black', 'sans-serif'],
        bhineka: ['Bhineka', 'script'],
      },
      animation: {
        fadeInUp: 'fadeInUp 1.2s ease forwards',
        fadeUpSmooth: 'fadeUpSmooth 1.4s ease forwards',
        marquee: 'marquee 35s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeUpSmooth: {
          '0%': {
            opacity: '0.5',
            transform: 'translateY(60px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        marquee: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
}

export default config
