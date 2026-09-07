// helix: postcss.config.js
/**
 * @helix:story USER-63000
 *
 * PostCSS configuration — Tailwind v4 uses the dedicated
 * `@tailwindcss/postcss` plugin instead of the legacy v3 pipeline.
 * Autoprefixer is included to vendor-prefix any legacy properties
 * the marketing site relies on.
 */
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};