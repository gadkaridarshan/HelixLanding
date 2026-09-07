// helix: app/eslint.config.mjs
/**
 * @helix:story USER-285000
 *
 * ESLint flat config — extends `eslint-config-next` (Next 16) and
 * applies it to TypeScript / TSX files. Replaces the legacy
 * `.eslintrc.json` to match ESLint 9.
 */
import next from "eslint-config-next";

export default [
  ...next(),
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "public/**",
      "next-env.d.ts",
    ],
  },
];