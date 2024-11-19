import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: "#252220",
        darkGreen: "#0B4F26",
        lightGreen: "#1C8F49",
        yellowGreen: "#8FC451",
        white: "#F6F7F2"
      },
      fontFamily: {
        sans: ["Inter"]
      },
      height: {
        carousel: "30rem"
      },
      spacing: {
        '84': '21rem'
      },
      letterSpacing: {
        carouselSmall: '0.1rem',
        carouselMedium: '0.5rem'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shine: {
          '0%': { boxShadow: '0 0 10px 3px rgba(31, 255, 71, 0.3)' },
          '100%': { boxShadow: '0 0 20px 6px rgba(31, 255, 71, 0.6)' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-out forwards',
        shine: 'shine 3s linear forwards'
      },
      fontSize: {
        '3xs': '0.4rem',
        '2xs': '0.5rem'
      },
      screens: {
        md: '821px'
      }
    },
  },
  plugins: [],
};
export default config;
