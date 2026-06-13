import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8b5cf6',
          dark: '#7c3aed',
          light: '#a78bfa',
        },
        secondary: {
          DEFAULT: '#ec4899',
          light: '#f472b6',
          dark: '#db2777',
        },
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444',
        playful: {
          purple: '#a855f7',
          pink: '#ec4899',
          blue: '#3b82f6',
          yellow: '#fbbf24',
          orange: '#fb923c',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['Fredoka', 'cursive', 'system-ui'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
      },
      boxShadow: {
        'playful': '0 8px 16px -4px rgba(139, 92, 246, 0.3), 0 4px 8px -2px rgba(236, 72, 153, 0.2)',
        'playful-lg': '0 12px 24px -6px rgba(139, 92, 246, 0.4), 0 6px 12px -3px rgba(236, 72, 153, 0.3)',
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
