import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        black: "#101010",
        "black-sec": "#1E1E1E",

        bg: "#12192C",
        "light-bg": "#182445",
        
        white: "#FAFAFA",
        text: "#D4D4D4",
        "dark-gray": "#636363",
        gray: "#A1A1A1",

        red: "#E52020",
        "dark-red": "#9F1A1A",

        blue: "#1851E5",
        "dark-blue": "#11389A",

        purple: "#4931A9",

        "light-green": "#02DE40",
        green: "#09B73A",
        "dark-green": "#013D0A",
      },

      keyframes: {
        letsgo: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(25%)' }
        },
        rotation: {
          '0%': { '--gradient-angle': '0deg' },
          '100%': { '--gradient-angle': '360deg' },
        },
        "fade-in": {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },

      animation: {
        letsgo: 'letsgo 0.6s ease-in-out infinite',
        rotation: 'rotation 5s linear infinite',
        "fade-in": "fade-in 200ms linear"
      },

      boxShadow: {
        'glassmorphism-like': '0 0 8px 1px rgba(0,0,0,0.2), inset 19px 0 16px 4px rgba(24,81,229,0.25), inset -19px 0 16px 4px rgba(229,32,32,0.25)',
      },
    },

    screens: {
      xs: '400px',
      sm: '480px',
      md: '768px',
      mdp: '580px',
      lg: '976px',
      lgp: '1024px',
      xl: '1440px',
    },
  },
  plugins: [
  ],
} satisfies Config

