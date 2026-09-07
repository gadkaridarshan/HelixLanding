// helix: postcss.config.mjs
/**
 * @helix:story USER-445000
 *
 * PostCSS pipeline for Tailwind v4. The `@tailwindcss/postcss`
 * plugin replaces the legacy `tailwindcss` PostCSS plugin and
 * handles `@import "tailwindcss"` declarations in CSS source.
 */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};

export default config;