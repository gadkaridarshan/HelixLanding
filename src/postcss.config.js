/**
 * @helix:story USER-63000
 *
 * PostCSS config for the Helix marketing site.
 *
 * Tailwind v4 ships its own PostCSS plugin (`@tailwindcss/postcss`)
 * which handles `@import "tailwindcss"` declarations plus the
 * `@theme` token surface defined in `app/globals.css`.
 *
 * `autoprefixer` is kept in the chain for any hand-written CSS that
 * needs vendor prefixes (Tailwind v4 already emits most of them).
 */
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};