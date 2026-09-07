import type { MetadataRoute } from "next";

import { brand } from "@/lib/brand";

/**
 * @helix:story USER-915000
 *
 * Robots — allows all crawlers on the canonical landing page and
 * points search engines at the sitemap. The sitemap URL uses the
 * canonical brand URL so it always points at the live site, not a
 * preview deployment.
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