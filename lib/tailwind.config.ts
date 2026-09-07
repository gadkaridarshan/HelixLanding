// helix: tailwind.config.ts
/**
 * @helix:story USER-285000
 *
 * Tailwind v4 is CSS-first: tokens are declared directly in
 * `app/globals.css` inside the `@theme { … }` block. This file is
 * kept as a stub so any tooling that still expects a JS config
 * (e.g. some IDE integrations) can find one. Add JS-side
 * overrides here only if you need to extend content scanning
 * beyond the App Router defaults.
 */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx,json}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;