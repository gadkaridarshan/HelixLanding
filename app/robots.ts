// helix: app/robots.ts
/**
 * @helix:story USER-94000
 *
 * robots.txt — Vercel-friendly robots configuration. Generated
 * by Next.js App Router's `MetadataRoute.Robots` so the file is
 * served at `/robots.txt` on every deploy.
 *
 * Allows all crawlers by default but blocks Next.js internals
 * (`/api/`, `/_next/`) from indexing. Sitemap is co-located with
 * the brand canonical URL so crawlers can discover every URL.
 */
import type { MetadataRoute } from "next";

import { brand } from "@/lib/brand";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${brand.url}/sitemap.xml`,
    host: brand.url,
  };
}