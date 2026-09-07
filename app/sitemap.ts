// helix: app/sitemap.ts
/**
 * @helix:story USER-94000
 *
 * Sitemap — Vercel-friendly sitemap.xml generator. Uses Next.js
 * App Router's built-in `MetadataRoute.Sitemap` so the file is
 * generated automatically on every deploy.
 *
 * Lists the homepage plus the in-page anchor sections so
 * crawlers can find every meaningful entry point on the page.
 * Brand surface (canonical URL, last-modified timestamps) is
 * sourced from `lib/brand.ts` to stay consistent with the rest
 * of the site.
 */
import type { MetadataRoute } from "next";

import { brand } from "@/lib/brand";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: ReadonlyArray<{
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }> = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/#features", priority: 0.8, changeFrequency: "monthly" },
    { path: "/#how-it-works", priority: 0.8, changeFrequency: "monthly" },
    { path: "/#personas", priority: 0.7, changeFrequency: "monthly" },
    { path: "/#faq", priority: 0.6, changeFrequency: "monthly" },
    { path: "/#cta", priority: 0.8, changeFrequency: "monthly" },
  ];

  return staticRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${brand.url}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}