import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /** Extraídos del CSS en vivo de martabge.com (WooCommerce / tema custom) */
        rose: {
          DEFAULT: "#ba6776",
          soft: "#bb6676",
          deep: "#a46497",
        },
        cream: "#f9f3ed",
        sage: "#8B9F96",
        gold: "#c58c21",
        ink: "#2b2927",
        muted: "#9c9c9c",
        line: "#d5d5d5",
      },
      fontFamily: {
        sans: ["var(--font-karla)", "system-ui", "sans-serif"],
        serif: ["var(--font-lora)", "Georgia", "serif"],
      },
      boxShadow: {
        menu: "0 4px 6px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
