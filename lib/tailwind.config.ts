import type { Config } from "tailwindcss";

/**
 * @helix:story USER-63000
 *
 * Tailwind config for the Helix marketing site.
 *
 * Notes on Tailwind v4:
 *   • The full design-token surface (`@theme`) lives in
 *     `app/globals.css` — Tailwind v4 reads CSS variables directly,
 *     so this file only wires content paths and a couple of
 *     non-token utilities (e.g. font-feature-settings).
 *   • We still need a `tailwind.config.ts` so that the PostCSS
 *     pipeline (`@tailwindcss/postcss`) knows which files to scan.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./content/**/*.{json,md,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
        ],
        mono: [
          "var(--font-jetbrains-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
      fontFeatureSettings: {
        ss01: ['"ss01"'],
        cv11: ['"cv11"'],
      },
    },
  },
  plugins: [],
};

export default config;