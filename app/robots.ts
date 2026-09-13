/**
 * @helix:story USER-248000
 *
 * Robots.txt for SEO — tells search engine crawlers how to index the site.
 */
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"],
    },
    sitemap: "https://helix-ai-orchestrator.vercel.app/sitemap.xml",
  };
}