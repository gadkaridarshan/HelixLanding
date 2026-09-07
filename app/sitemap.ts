import type { MetadataRoute } from "next";

import { brand } from "@/lib/brand";

/**
 * @helix:story USER-915000
 *
 * Sitemap — declares the single canonical landing page so search
 * engines can index the production site. The brand URL is the
 * source of truth (overridable via `NEXT_PUBLIC_BRAND_URL`),
 * keeping the sitemap and `<link rel="canonical">` in sync.
 *
 * Next.js App Router automatically serves this as
 * `/sitemap.xml` at the site root.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: brand.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          "en-US": brand.url,
        },
      },
    },
  ];
}