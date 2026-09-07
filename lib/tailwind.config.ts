import type { Config } from "tailwindcss";

/**
 * @helix:story USER-63000
 *
 * Tailwind config — intentionally minimal.
 *
 * The Helix design system is fully defined in `app/globals.css` via
 * Tailwind v4's `@theme` block (color tokens for ink/brand/accent/
 * aurora, radii, shadows, and font families wired to next/font CSS
 * variables). Tailwind v4 reads those tokens at build time, so this
 * file only configures the content globs and a couple of safe
 * defaults.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx,json}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;