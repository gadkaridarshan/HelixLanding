/** @type {import('jest').Config} */
const base = require("./src/jest.config.js");

module.exports = {
  ...base,
  rootDir: ".",
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  collectCoverageFrom: [
    "components/sections/footer/Footer.tsx",
    "components/sections/Footer.tsx",
    "app/components/sections/Footer.tsx",
    "lib/brand.ts",
    "app/page.tsx",
  ],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
};