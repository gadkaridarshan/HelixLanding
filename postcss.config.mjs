/**
 * @helix:story USER-23000
 *
 * PostCSS configuration — Tailwind v4 PostCSS plugin wiring.
 * Tailwind v4 uses `@tailwindcss/postcss` as its single PostCSS plugin.
 */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;