// helix: tailwind.config.ts
/**
 * @helix:story USER-285000
 *
 * Tailwind v4 is CSS-first — tokens live in `app/globals.css`
 * under `@theme`. This file is intentionally minimal: it only
 * points the Tailwind v4 engine at our content roots so that any
 * class emitted by `.tsx` files is detected. The full design
 * token surface (ink/brand/accent/aurora, fonts, radii, shadows)
 * is declared in `app/globals.css`.
 */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}",
    "./lib/**/*.{ts,tsx,js,jsx,mdx}",
    "./content/**/*.{md,mdx,json}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;