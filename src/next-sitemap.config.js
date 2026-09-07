/**
 * @helix:story USER-915000
 *
 * Sitemap generation for the Helix marketing site.
 *
 * Run manually with: `npx next-sitemap` after `npm run build`.
 * (This repo does not auto-run it as a `postbuild` script because
 *  `package.json` is owned by USER-63000. Install with:
 *     npm install --save-dev next-sitemap
 *  then add `"postbuild": "next-sitemap"` if you want it automated.)
 *
 * Output: `public/sitemap.xml` and `public/robots.txt`
 *
 * Site URL precedence:
 *   1. `NEXT_PUBLIC_BRAND_URL` (mirrors `lib/brand.ts`)
 *   2. `SITE_URL` (fallback for CI)
 *   3. `https://helix-ai-orchestrator.vercel.app` (last resort)
 *
 * Every section anchor (`#features`, `#how-it-works`, `#personas`,
 * `#faq`) is emitted as its own sitemap entry so crawlers can index
 * each section independently. This boosts deep-link SEO for the
 * single-page marketing site.
 */

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.NEXT_PUBLIC_BRAND_URL ||
    process.env.SITE_URL ||
    "https://helix-ai-orchestrator.vercel.app",

  generateRobotsTxt: true,
  generateIndexSitemap: false,

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/_next/", "/api/"],
      },
    ],
    sitemap: null, // flat sitemap.xml; no index needed for a single-host site
    host:
      process.env.NEXT_PUBLIC_BRAND_URL ||
      process.env.SITE_URL ||
      "https://helix-ai-orchestrator.vercel.app",
  },

  transform: async (_cfg, path) => {
    const cleanPath = path.replace(/\/+$/, "") || "/";
    return {
      loc: cleanPath,
      changefreq: "weekly",
      priority: cleanPath === "/" ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },

  // Emit every section anchor as its own URL for deep-link SEO.
  additionalPaths: async () => {
    const anchors = ["", "#features", "#how-it-works", "#personas", "#faq"];
    return anchors.map((anchor) => ({
      loc: anchor ? `/${anchor}` : "/",
      changefreq: "weekly",
      priority: anchor === "" ? 1.0 : 0.6,
      lastmod: new Date().toISOString(),
    }));
  },
};