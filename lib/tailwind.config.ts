import type { Config } from "tailwindcss";

/**
 * Tailwind v4 uses a CSS-first config (`@theme` in globals.css),
 * so this JS config is intentionally minimal. We only declare the
 * content globs so Tailwind knows which files to scan for class
 * usage, and the dark-mode strategy.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx,json}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;