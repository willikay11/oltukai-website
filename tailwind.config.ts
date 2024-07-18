import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgba(var(--color-primary) / <alpha-value>)",
        secondary: "rgba(var(--color-secondary) / <alpha-value>)",
      },
      fontSize: {
        "16": [
          "1rem",
          {
            lineHeight: "1.563rem",
            letterSpacing: "-0.02em",
            fontWeight: "500",
          },
        ],
        "13": [
          "0.813rem",
          {
            lineHeight: "1.25rem",
            fontWeight: "500",
          }
        ]
      },
    },
  },
  plugins: [],
};
export default config;
