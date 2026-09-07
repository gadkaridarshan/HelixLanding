// helix: next.config.ts
/**
 * @helix:story USER-285000
 *
 * Next.js configuration for the Helix landing site.
 *
 * Notes:
 *   • `reactStrictMode` is on so we catch lifecycle bugs early.
 *   • Image allow-list intentionally tight; add new domains only
 *     after reviewing where the asset lives (privacy + perf).
 *   • `poweredByHeader` disabled — Helix strips `X-Powered-By` on
 *     production responses.
 */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "helix-ai-orchestrator.vercel.app",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;