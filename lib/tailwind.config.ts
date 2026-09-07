// helix: tailwind.config.ts
/**
 * @helix:story USER-63000
 *
 * Tailwind CSS configuration for the Helix landing site.
 *
 * Tailwind v4 reads its design tokens from the `@theme` block in
 * `app/globals.css`. This file exists so older tooling (IDE
 * intellisense, class-name autocompletion, third-party plugins)
 * keeps working without warning. The actual token values live in
 * CSS so they are the single source of truth.
 */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx,md,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,md,mdx}",
    "./content/**/*.{ts,tsx,js,jsx,json,md,mdx}",
    "./lib/**/*.{ts,tsx,js,jsx,md,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;