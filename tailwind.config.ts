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
      }
    },
  },
  plugins: [],
};
export default config;
