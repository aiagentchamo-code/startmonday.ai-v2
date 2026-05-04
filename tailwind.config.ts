/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F4F9F8',
        surface: '#FFFFFF',
        ink: '#0E2420',
        'ink-muted': '#4A6A64',
        accent: '#2B7D6D',
        'accent-soft': '#DFF0EC',
        warm: '#E06535',
        mint: '#5EEAD4',
        sun: '#FFD166',
        line: '#D0E8E3',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-plus-jakarta)'],
      },
      fontSize: {
        'h1': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.05', fontWeight: '700', letterSpacing: '-0.02em' }],
        'h2': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.2', fontWeight: '700', letterSpacing: '-0.01em' }],
        'body': ['1.0625rem', { lineHeight: '1.6' }],
        'eyebrow': ['0.75rem', { lineHeight: '1', fontWeight: '600', letterSpacing: '0.15em' }],
        'button': ['0.95rem', { lineHeight: '1', fontWeight: '600' }],
      },
      spacing: {
        'section': 'clamp(1rem, 4vw, 2rem)',
      },
      borderRadius: {
        'card': '1rem',
        'lg': '1.5rem',
        'xl': '2rem',
        '3xl': '1.875rem',
      },
      boxShadow: {
        'soft': '0 20px 60px -20px rgba(108, 92, 231, 0.25)',
        'md': '0 4px 12px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
