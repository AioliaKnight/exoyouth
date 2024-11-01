import plugin from 'tailwindcss/plugin';
import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{css,scss}'
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...fontFamily.sans],
        display: ['Cal Sans', ...fontFamily.sans],
      },
      colors: {
        brand: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
          950: '#4c0519',
        },
      },
      spacing: {
        '18': '4.5rem',
        '112': '28rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
        '3xl': ['2rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.5rem', { lineHeight: '2.75rem' }],
        '5xl': ['3rem', { lineHeight: '3.25rem' }],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "slide-in-from-top": {
          "0%": {
            transform: "translateY(-100%)",
            opacity: 0
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1
          }
        },
        "slide-in-from-bottom": {
          "0%": {
            transform: "translateY(100%)",
            opacity: 0
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1
          }
        },
        "slide-out-to-right": {
          "0%": {
            transform: "translateX(0)",
            opacity: 1
          },
          "100%": {
            transform: "translateX(100%)",
            opacity: 0
          }
        },
        "fade-in": {
          "0%": {
            opacity: 0,
            transform: "translateY(10px)"
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)"
          }
        },
        "fade-out": {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 }
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" }
        },
        spin: {
          to: { transform: "rotate(360deg)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-in": "slide-in-from-top 0.3s ease-out",
        "slide-out": "slide-out-to-right 0.3s ease-out",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "fade-out": "fade-out 0.5s ease-out forwards",
        "spin-slow": "spin 3s linear infinite",
        shimmer: "shimmer 2s linear infinite"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  safelist: [
    // 顏色相關
    {
      pattern: /(bg|text|border)-(brand|blue|purple|pink|indigo)-(50|100|200|300|400|500|600|700|800|900|950)/,
      variants: ['hover', 'focus', 'active', 'disabled', 'group-hover'],
    },
    // 動畫相關
    {
      pattern: /animate-(fade|slide|spin|bounce|pulse)/,
      variants: ['hover', 'focus', 'group-hover'],
    },
    // 間距相關
    {
      pattern: /(p|m)(t|r|b|l|x|y)?-(0|1|2|3|4|5|6|8|10|12|16|20|24|32|40|48|56|64)/,
    },
  ],
  plugins: [
    // 自定義組件樣式
    plugin(({ addComponents, theme }) => {
      addComponents({
        '.glass-card': {
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(10px)',
          borderRadius: theme('borderRadius.2xl'),
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: theme('boxShadow.lg'),
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: theme('boxShadow.xl'),
          },
        },
        '.btn-primary': {
          backgroundColor: theme('colors.brand.600'),
          color: theme('colors.white'),
          borderRadius: theme('borderRadius.full'),
          padding: `${theme('spacing.3')} ${theme('spacing.6')}`,
          fontWeight: theme('fontWeight.medium'),
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: theme('colors.brand.700'),
            transform: 'translateY(-1px)',
          },
          '&:active': {
            transform: 'translateY(0)',
          },
        },
      });
    }),
    // 自定義工具類
    plugin(({ addUtilities, theme }) => {
      addUtilities({
        '.bg-blur': {
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        },
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0,0,0,0.1)',
        },
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
    }),
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
};