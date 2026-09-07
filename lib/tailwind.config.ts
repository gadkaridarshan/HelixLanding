// helix: tailwind.config.ts
/**
 * @helix:story USER-63000
 *
 * Tailwind config — minimal v4-friendly shim. Tailwind v4 reads tokens
 * from the `@theme` block in `app/globals.css` and content paths from
 * PostCSS, so this file mainly:
 *
 *   1. Pins the content scan paths so utility class usage outside
 *      `app/` (e.g. `components/landing/**`) is still detected.
 *   2. Enables the `tailwindcss-animate`-style class merge strategy by
 *      leaving `theme.extend` empty — customisation happens in CSS.
 *
 * Keeping the config explicit (rather than relying solely on the v4
 * auto-detect) makes the build reproducible across CI and local.
 */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}",
    "./content/**/*.{ts,tsx,js,jsx,mdx,json}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;