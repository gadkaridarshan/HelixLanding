/** @type {import('next').NextConfig} */
// @helix:story [USER-735000]
// @helix:story [USER-1789624187732]
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

/**
 * Prerequisites
 * - Node.js (v18.17.0 or later)
 * - npm (v9.0.0 or later)
 * - Git (for version control)
 *
 * Running locally
 * 1. Install dependencies: \`npm install\`
 * 2. Start the development server: \`npm run dev\`
 * 3. Verify success: Open <http://localhost:3000> in your browser to see the landing page
 *
 * Short answer: The rendering issue was resolved by ensuring the Next.js configuration contains only valid keys and removing any unrecognized options like \`swcMinify\` or \`output: 'export'\`.
 */