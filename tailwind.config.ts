import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A855F7",
        "primary-hover": "#9333EA",
        "primary-light": "#F3E8FF",
        "background-light": "#F5F6FA",
        "background-dark": "#111116",
        "surface-light": "#FFFFFF",
        "surface-dark": "#1F1F23",
        "text-light": "#111111",
        "text-secondary-light": "#767676",
      },
      fontFamily: {
        display: ["var(--font-dm-sans)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
      keyframes: {
        pulseCustom: {
          "0%, 100%": {
            transform: "scale(1)",
            boxShadow: "0 0 0 0 rgba(168, 85, 247, 0.7)",
          },
          "50%": {
            transform: "scale(1.05)",
            boxShadow: "0 0 0 10px rgba(168, 85, 247, 0)",
          },
        },
      },
      animation: {
        pulseCustom: "pulseCustom 2s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
