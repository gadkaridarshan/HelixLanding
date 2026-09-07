// helix: postcss.config.js
/**
 * @helix:story USER-285000
 *
 * PostCSS configuration — Tailwind v4 is wired through the official
 * `@tailwindcss/postcss` plugin. Autoprefixer is no longer required
 * for Tailwind v4 (it's bundled), but we keep it for any other
 * vendor-prefixed CSS we may add later.
 */
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};