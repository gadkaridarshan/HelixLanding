// helix: next.config.mjs
/**
 * @helix:story USER-445000
 *
 * Next.js 16 configuration. Marketing site is a static-rendered
 * App Router project — no image domains, no rewrites, no
 * experimental flags beyond the defaults. Kept minimal so the
 * build is reproducible on Vercel + locally.
 *
 * Tailwind v4 handles all design tokens via `app/globals.css`, so
 * no JS Tailwind config is required for token registration.
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Production source maps off — keep artifacts small for the
  // marketing surface.
  productionBrowserSourceMaps: false,
  // Compress responses served by Next.js (Vercel already adds its
  // own edge gzip, but this covers local `next start` too).
  compress: true,
};

export default nextConfig;