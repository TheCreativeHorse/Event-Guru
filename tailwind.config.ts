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
        charcoal: "var(--color-charcoal)",
        gold: "var(--color-gold)",
        "gold-light": "var(--color-gold-light)",
        offwhite: "var(--color-offwhite)",
        midgrey: "var(--color-midgrey)",
        white: "var(--color-white)",
        footer: "#111111",
      },
      fontFamily: {
        heading: ["var(--font-cormorant)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
