The first deploy takes ~1–2 minutes. Subsequent deploys reuse the cache.

### Option B — Git integration

1. Push the repo to GitHub / GitLab / Bitbucket.
2. Visit <https://vercel.com/new> and **Import Project**.
3. Vercel auto-detects Next.js. Leave defaults:
   - Build command: `next build`
   - Output: `.next`
   - Install command: `npm install`
4. Click **Deploy**. The first build takes ~1–2 minutes; subsequent deploys are cached.

> The canonical production URL for **this** live site is defined in `lib/brand.ts` (`brand.url`) and can be overridden via the `NEXT_PUBLIC_BRAND_URL` environment variable.

## Sitemap and SEO

Sitemap generation is configured in [`next-sitemap.config.js`](./next-sitemap.config.js). The config emits `public/sitemap.xml` and `public/robots.txt` after the build.

To enable automated generation in your fork: