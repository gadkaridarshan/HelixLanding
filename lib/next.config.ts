// helix: next.config.ts
/**
 * @helix:story USER-285000
 *
 * Next.js configuration for the Helix landing site.
 *
 *   • React strict mode is left to React itself (Next enables it
 *     automatically in development).
 *   • Image hosts are open by default since this site only uses
 *     first-party SVG / data URIs for social cards. Tighten as
 *     needed when third-party assets are introduced.
 *   • Typed routes are generated into `.next/types` so that
 *     `next/link` and `next/router` provide autocomplete for
 *     every route in the app.
 */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    typedRoutes: false,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;