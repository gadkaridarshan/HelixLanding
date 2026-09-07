Open `/sitemap.xml` on your deployed site to verify the entries.

## Environment variables

| Variable                   | Required | Purpose                                                |
| -------------------------- | -------- | ------------------------------------------------------ |
| `NEXT_PUBLIC_BRAND_URL`    | optional | Override `lib/brand.ts` `brand.url` for OG/canonical.   |
| `SITE_URL`                 | optional | Fallback sitemap URL (used by `next-sitemap.config.js`).|

## Project layout

- `app/` — Next.js App Router entry (layout, pages, global styles).
- `components/landing/` — Canonical section implementations (Hero, Features, HowItWorks, Personas, FinalCTA, FAQ, Navbar, Footer, SocialProof).
- `components/sections/` — Re-export shims so both `@/components/sections/*` and `@/app/components/sections/*` resolve to the same components.
- `components/ui/` — Shared primitives (`Container`, `Button`, `cn`).
- `content/` — Structured content (copy, FAQs, feature data, sitemap config).
- `lib/` — Shared utilities and brand constants (`lib/brand.ts`, `lib/theme.ts`).
- `public/` — Static assets (favicon, OG image, marketing imagery).
- `next-sitemap.config.js` — Post-build sitemap + robots generation.

## Reference vs. live site — at a glance

| Label              | URL                                          | What it is                                                                 |
| ------------------ | -------------------------------------------- | -------------------------------------------------------------------------- |
| **Live site**      | <https://helix-ai-orchestrator.vercel.app>   | This repo, deployed to Vercel. **Is** the product.                         |

## License

See repository metadata.