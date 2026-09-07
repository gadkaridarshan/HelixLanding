| Variable                | Required | Purpose                                                                              |
| ----------------------- | -------- | ------------------------------------------------------------------------------------ |
| `NEXT_PUBLIC_BRAND_URL` | No       | Canonical production URL embedded in metadata + footer. Defaults to the reference.   |

Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser bundle.

## Deploy to Vercel

This repo is the **live site** for this workspace — distinct from the reference demo linked at the top. It works out-of-the-box on Vercel; `vercel.json` at the repo root pins the framework (`nextjs`), build/install/dev/output commands, region (`iad1`), security headers, and long-lived caching for `/_next/static/*` and `/fonts/*`.

### Option A — Vercel CLI (recommended for this repo)

1. Install the CLI and authenticate:

   ```bash
   npm i -g vercel
   vercel login
   ```

2. From the repo root, deploy a preview:

   ```bash
   vercel
   ```

   **Verify:** the CLI prints a `Preview URL` line (e.g. `https://helix-landing-<hash>.vercel.app`). Open it — the hero, gradient background, and Final CTA all render without console errors.

3. Promote to production:

   ```bash
   vercel --prod
   ```

   **Verify:** the CLI prints `Production URL:` with the URL defined by `brand.url` (or your override of `NEXT_PUBLIC_BRAND_URL`).

### Option B — Git integration

1. Push the repo to GitHub / GitLab / Bitbucket.
2. Visit <https://vercel.com/new> and **Import Project**.
3. Vercel auto-detects Next.js. Leave defaults:
   - Build command: `next build`
   - Output: `.next`
   - Install command: `npm install`
4. Click **Deploy**. The first build takes ~1–2 minutes; subsequent deploys are cached.

> The canonical production URL for **this** live site is defined in `lib/brand.ts` (`brand.url`) and can be overridden via the `NEXT_PUBLIC_BRAND_URL` environment variable. It is **not** the reference URL listed at the top of this README — that one points only to an external visual reference and is not deployed from this repository.

## Project layout

- `app/` — Next.js App Router entry (`layout.tsx`, `layout.metadata.ts`, `page.tsx`, `globals.css`, `fonts.ts`).
- `components/landing/` — Canonical section implementations (Hero, Features, HowItWorks, Personas, etc.).
- `components/Cta.tsx`, `components/Footer.tsx` — FinalCTA + Footer (canonical).
- `components/sections/`, `app/components/sections/` — Re-export shims so both `@/components/sections/*` and `@/app/components/sections/*` resolve to the same components.
- `components/ui/` — Shared primitives (`Container`, `cn`).
- `content/` — Structured content (FAQs, feature data, persona copy).
- `lib/` — Shared utilities and design tokens (`lib/brand.ts`, `lib/theme.ts`).
- `public/` — Static assets (favicon, OG card, marketing imagery).
- `vercel.json` — Vercel project config (framework, headers, caching).

## Reference vs. live site — at a glance

| Label               | URL                                          | What it is                                                                 |
| ------------------- | -------------------------------------------- | -------------------------------------------------------------------------- |
| **Reference site**  | <https://helix-ai-orchestrator.vercel.app>   | External visual / brand reference only. **Not** deployed from this repo.  |
| **Live site**       | `brand.url` (see `lib/brand.ts`)             | This repo, deployed via Vercel. Override with `NEXT_PUBLIC_BRAND_URL`.    |

## License

MIT — see `LICENSE` in the source repo.