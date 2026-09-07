// helix: next.config.ts
/**
 * @helix:story USER-285000
 *
 * Next.js configuration for the Helix Landing marketing site.
 *
 * Notes:
 *  • App Router is on by default in Next.js 16 — no need to opt-in.
 *  • We enable typed routes for compile-time link safety.
 *  • We rely on `app/layout.metadata.ts` + `lib/brand.ts` for metadata;
 *    this config stays focused on build/runtime behavior.
 */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  typedRoutes: true,
  experimental: {
    optimizePackageImports: ["clsx", "tailwind-merge"],
  },
};

export default nextConfig;