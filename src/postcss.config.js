// helix: postcss.config.js
/**
 * @helix:story USER-63000
 *
 * PostCSS pipeline for the Helix landing site.
 *
 * Tailwind v4 is wired through `@tailwindcss/postcss`; no other
 * plugins are needed.
 */
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};