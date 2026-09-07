// helix: app/robots.ts
import type { MetadataRoute } from "next";

import { brand } from "@/lib/brand";

/**
 * @helix:story USER-11000
 * @helix:story USER-915000
 *
 * Robots — Next.js App Router file-based convention. Emits the
 * `/robots.txt` endpoint at the site root via `MetadataRoute.Robots`.
 *
 * Keeps the sitemap URL in lockstep with `brand.url` so a custom
 * domain (via `NEXT_PUBLIC_BRAND_URL`) never strands crawlers on
 * the wrong host.
 */
export default function robots(): MetadataRoute.Robots {
  const siteUrl = brand.url.endsWith("/") ? brand.url.slice(0, -1) : brand.url;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}