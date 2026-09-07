/**
 * @helix:story USER-63000
 *
 * PostCSS pipeline for Tailwind v4. The `@tailwindcss/postcss`
 * plugin replaces the legacy `tailwindcss` PostCSS plugin and
 * handles `@import "tailwindcss"` declarations in CSS source.
 */
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};