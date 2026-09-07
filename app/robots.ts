import type { MetadataRoute } from "next";

import { brand } from "@/lib/brand";

/**
 * @helix:story USER-915000
 *
 * Robots — Next.js App Router file-based convention. Renders the
 * `/robots.txt` endpoint at the site root using `MetadataRoute.Robots`.
 *
 * Keeps the sitemap URL in lockstep with `brand.url` so a custom
 * domain (via `NEXT_PUBLIC_BRAND_URL`) does not strand crawlers on
 * the wrong host.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${brand.url}/sitemap.xml`,
    host: brand.url,
  };
}