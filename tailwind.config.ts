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
      }
    },
  },
  plugins: [],
} satisfies Config

