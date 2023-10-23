import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: { themes: [] },
  theme: {
    extend: {
      keyframes: {
        colorChangePrimary: {
          "0%": {
            "backgroun-color": "rgb(128,0,255)",
          },
          "100%": {
            "background-color": "rgb(255,0,225)",
          },
        },
        colorChangeSecondary: {
          "0%": {
            "backgroun-color": "rgb(0,255,102)",
          },
          "100%": {
            "background-color": "rgb(255,226,82)",
          },
        },
      },
      animation: {
        colorChangePrimary: "colorChangePrimary 5s infinite alternate",
        colorChangeSecondary: "colorChangeSecondary 5s infinite alternate",
      },
    },
  },
};
export default config;
