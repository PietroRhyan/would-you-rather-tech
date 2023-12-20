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
      },

      animation: {
        letsgo: 'letsgo 0.6s ease-in-out infinite',
        rotation: 'rotation 5s linear infinite',
      },
    },

    screens: {
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

