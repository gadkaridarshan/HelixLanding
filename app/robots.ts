// helix: app/robots.ts
import type { MetadataRoute } from "next";

import { brand } from "@/lib/brand";

/**
 * @helix:story USER-915000
 *
 * Robots — declares that the entire site is crawlable and points
 * crawlers at the sitemap so search engines can index the production
 * site. Brand URL is the source of truth.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${brand.url}/sitemap.xml`,
    host: brand.url,
  };
}