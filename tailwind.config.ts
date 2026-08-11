import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        // Brand — navy primary like Hammersmith, with a sharp accent
        navy: {
          50: '#F2F5FA',
          100: '#E1E7F1',
          200: '#B9C5DC',
          300: '#8298BD',
          400: '#4D6B9C',
          500: '#2C4B7F',
          600: '#1E3A66',
          700: '#152B4E',
          800: '#0F1F38',
          900: '#0A1628',
          950: '#060E1A',
        },
        accent: {
          DEFAULT: '#1FA8FF', // bright cyan-blue — matches the hero data-centre LEDs
          hover: '#0E86D6',
        },
        // Secondary accent — the red facet in the Acraft wordmark. Used sparingly
        // to mark the highest-priority items so the blue does not read as flat.
        brand: {
          DEFAULT: '#E11D2E',
          hover: '#B8151F',
        },
        ink: '#0A1628',
        muted: '#5B6B82',
        line: '#E6EAEF',
        surface: '#F5F7FA',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Mobile-first scale — desktop overrides with md:text-* in components
        'caption': ['12px', { lineHeight: '16px', fontWeight: '500' }],
        'body-sm': ['14px', { lineHeight: '20px', fontWeight: '500' }],
        'body': ['16px', { lineHeight: '24px', fontWeight: '500' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '500' }],
        'h4': ['20px', { lineHeight: '28px', fontWeight: '600' }],
        'h3': ['26px', { lineHeight: '34px', fontWeight: '600' }],
        'h2': ['32px', { lineHeight: '40px', fontWeight: '700' }],
        'h1': ['44px', { lineHeight: '52px', fontWeight: '700', letterSpacing: '-0.02em' }],
        'display': ['56px', { lineHeight: '64px', fontWeight: '700', letterSpacing: '-0.02em' }],
      },
      spacing: {
        // Mirrors the 4/8/12/16/24/32/48 scale from design-ui skill
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'base': '16px',
        'lg': '24px',
        'xl': '32px',
        'xxl': '48px',
        'section': '96px',
      },
      borderRadius: {
        sm: '6px',
        DEFAULT: '8px',
        md: '10px',
        lg: '14px',
        xl: '20px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(10,22,40,0.04), 0 4px 16px rgba(10,22,40,0.06)',
        elevated: '0 8px 32px rgba(10,22,40,0.12)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        // Translate exactly -50% so the duplicated half lines up seamlessly
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out forwards',
        'marquee': 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
