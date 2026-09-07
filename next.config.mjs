/**
 * @helix:story USER-23000
 *
 * Next.js configuration for the Helix marketing site.
 *
 * - React Strict Mode is enabled to surface lifecycle / effect bugs early.
 * - The default `x-powered-by` header is suppressed for a cleaner
 *   security footprint (already covered by `vercel.json`, but kept
 *   here as a belt-and-braces default).
 * - `images.remotePatterns` whitelists the canonical brand hostname so
 *   any future OG / social-share image hosted there can be optimized
 *   through `next/image`.
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "helix-ai-orchestrator.vercel.app",
      },
    ],
  },
};

export default nextConfig;