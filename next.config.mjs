// helix: next.config.mjs
/**
 * @helix:story USER-63000
 *
 * Next.js configuration for the Helix landing site.
 *
 * - `reactStrictMode`: enables extra dev-time correctness checks.
 * - `poweredByHeader`: disabled so the `X-Powered-By` header doesn't
 *   leak framework info on the marketing surface.
 * - `experimental.optimizePackageImports`: keeps the Tailwind / React
 *   build graphs lean for Vercel's edge cache.
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ["clsx", "tailwind-merge"],
  },
};

export default nextConfig;