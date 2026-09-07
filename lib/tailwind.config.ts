// helix: tailwind.config.ts
/**
 * @helix:story USER-285000
 *
 * Tailwind config.
 *
 * This project uses Tailwind v4 in CSS-first mode — the bulk of
 * design tokens live in `app/globals.css` under `@theme`. This
 * file exists to:
 *   • declare the content globs Tailwind scans
 *   • register dark mode as `class`-based (paired with `<html class="dark">`)
 *   • pin `corePlugins` defaults so an accidental v3 upgrade doesn't
 *     silently change behavior.
 */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx,json,md}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "var(--font-mono)",
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};

export default config;