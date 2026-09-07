// helix: next.config.mjs
/**
 * @helix:story USER-63000
 *
 * Next.js configuration — minimal, framework defaults. Keeps the
 * marketing site deployable on Vercel with zero custom webpack
 * tweaks so the platform's defaults (image optimization, caching,
 * edge runtime) all stay intact.
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    typedRoutes: false,
  },
};

export default nextConfig;