// tailwind.config.ts
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
        "brand-dark": "#1a1a2e",
        "brand-accent": "#e94560",
      },
      fontFamily: {
        // Añadimos Playfair Display como 'serif-brand'
        "serif-brand": ["var(--font-playfair-display)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
