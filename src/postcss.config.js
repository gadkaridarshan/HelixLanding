/**
 * @helix:story USER-63000
 *
 * PostCSS config — Tailwind v4 entry point.
 *
 * Helix uses Tailwind v4 (no `tailwind.config.ts` plugin chain) and
 * processes its stylesheet via `@tailwindcss/postcss`. Autoprefixer
 * is included for last-mile vendor prefixing on older browsers.
 */
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};