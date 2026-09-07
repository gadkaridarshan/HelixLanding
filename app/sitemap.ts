// helix: app/sitemap.ts
import type { MetadataRoute } from "next";

import { brand } from "@/lib/brand";

/**
 * @helix:story USER-11000
 * @helix:story USER-915000
 *
 * Sitemap — declares every publicly indexable URL on the Helix
 * landing site so search engines can crawl it efficiently.
 *
 * The brand URL is the source of truth (overridable via
 * `NEXT_PUBLIC_BRAND_URL`) so a custom domain keeps the sitemap and
 * `<link rel="canonical">` in lockstep.
 *
 * Next.js App Router serves this file as `/sitemap.xml` at the
 * site root — no API route, no Vercel rewrite required.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const siteUrl = brand.url.endsWith("/") ? brand.url.slice(0, -1) : brand.url;

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          "en-US": siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/opengraph-image`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}