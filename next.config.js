// @helix:story [USER-735000]
// @helix:story [USER-1789624187732]
/**
 * Prerequisites
 * - Node.js (v18.17.0 or later)
 * - npm (v9.0.0 or later)
 * - Git (for version control)
 *
 * Running locally
 * 1. Install dependencies: `npm install`
 * 2. Start the development server: `npm run dev`
 * 3. Verify success: Open <http://localhost:3000> in your browser to see the landing page
 *
 * Project Structure
 * helix-landing/
 * ├── app/
 * │   ├── globals.css
 * │   ├── layout.tsx
 * │   └── page.tsx
 * ├── components/
 * │   ├── CTA.tsx
 * │   ├── CTA.module.css
 * │   ├── Features.tsx
 * │   ├── Features.module.css
 * │   ├── Footer.tsx
 * │   ├── Footer.module.css
 * │   ├── Hero.tsx
 * │   ├── Hero.module.css
 * │   └── UI/
 * │       └── Button.tsx
 * ├── public/
 * ├── .vscode/
 * │   └── settings.json
 * ├── HelixCardInventory.md
 * ├── HelixGrandProjectSummary.md
 * └── .g
 *
 * Short answer:
 * To resolve the site rendering issue, the invalid 'swcMinify' option has been removed from next.config.js.
 * The site should now render all sections as expected.
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
};

module.exports = nextConfig;