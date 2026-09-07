// helix: postcss.config.js
/**
 * @helix:story USER-63000
 *
 * PostCSS pipeline — uses the Tailwind v4 PostCSS plugin so
 * `app/globals.css` (which declares `@import "tailwindcss"` and
 * `@theme {}` tokens) compiles to a single, optimized stylesheet.
 */
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};