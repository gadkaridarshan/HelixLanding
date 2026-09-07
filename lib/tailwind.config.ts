/**
 * @helix:story USER-63000
 *
 * Tailwind config — Tailwind v4 reads tokens from
 * `app/globals.css` (`@theme` block) and ignores this file for
 * token registration. We keep a minimal stub so any tool that
 * introspects `tailwind.config.*` (older editors, docs generators,
 * or the rare plugin that still requires it) finds the file.
 *
 * Do NOT add theme tokens here — they belong in
 * `app/globals.css` under `@theme`.
 */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx,md,json}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
};

export default config;