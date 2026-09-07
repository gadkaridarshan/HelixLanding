// helix: postcss.config.js
/**
 * @helix:story USER-63000
 *
 * PostCSS pipeline for Tailwind v4 + Autoprefixer. Tailwind is loaded
 * via the official PostCSS plugin (`@tailwindcss/postcss`) which is
 * the v4-recommended approach — the legacy `tailwindcss` PostCSS
 * plugin is deprecated.
 */
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};