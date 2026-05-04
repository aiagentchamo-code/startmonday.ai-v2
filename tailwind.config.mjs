/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#0E2420',
        'ink-muted': '#4A6A64',
        graphite: '#4A6A64',
        paper: '#FFFFFF',
        surface: '#FFFFFF',
        mist: '#F4F9F8',
        bg: '#F4F9F8',
        line: '#D0E8E3',
        accent: {
          DEFAULT: '#2B7D6D',
          soft: '#DFF0EC',
          dark: '#1E6B5B',
        },
        amber: {
          DEFAULT: '#F59E0B',
          600: '#D97706',
        },
        teal: {
          DEFAULT: '#2B7D6D',
        },
        warm: '#E06535',
        mint: '#5EEAD4',
        sun: '#FFD166',
        success: '#16A34A',
        error:   '#DC2626',
        warning: '#CA8A04',
      },
      fontFamily: {
        sans:    ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        content: '1200px',
        prose:   '68ch',
      },
      borderRadius: {
        DEFAULT: '8px',
        input:   '6px',
        pill:    '999px',
      },
      boxShadow: {
        elevated:        '0 10px 30px -12px rgba(14,36,32,.18)',
        'elevated-accent': '0 20px 60px -20px rgba(43,125,109,0.30)',
        card:            '0 4px 20px -4px rgba(14,36,32,.07)',
        'card-hover':    '0 12px 40px -8px rgba(43,125,109,0.18)',
        soft:            '0 20px 60px -20px rgba(43,125,109,0.25)',
      },
      transitionTimingFunction: {
        brand:      'cubic-bezier(0.2, 0.8, 0.2, 1)',
        'out-quart':'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      fontSize: {
        display: ['clamp(2.5rem, 5vw + 1rem, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
      },
    },
  },
  plugins: [],
};
