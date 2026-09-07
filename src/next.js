### Option B — Git integration

1. Push the repo to GitHub / GitLab / Bitbucket.
2. Visit <https://vercel.com/new> and **Import Project**.
3. Vercel auto-detects Next.js. Leave defaults:
   - Build command: `next build`
   - Output: `.next`
   - Install command: `npm install`
4. Click **Deploy**. The first build takes ~1–2 minutes; subsequent deploys are cached.

> The canonical production URL for **this** live site is defined in `lib/brand.ts` (`brand.url`) and can be overridden via the `NEXT_PUBLIC_BRAND_URL` environment variable. It is **not** the reference URL listed at the top of this README — that one points only to an external visual reference and is not deployed from this repository.

## Environment variables

| Variable                 | Purpose                                                                    |
| ------------------------ | -------------------------------------------------------------------------- |
| `NEXT_PUBLIC_BRAND_URL`  | Canonical production URL for `<title>`, OG cards, and footer hostname.     |

Set it in Vercel under **Project → Settings → Environment Variables** before the first production deploy if you want a custom domain to be reflected in metadata.

## Project layout

- `app/` — Next.js App Router entry (`layout.tsx`, `page.tsx`, `globals.css`, `fonts.ts`).
- `components/landing/` — Canonical section implementations (Navbar, Hero, StatsBar, Features, HowItWorks, Personas, SocialProof, FAQ, CTA, Footer).
- `components/sections/` — Re-export shims so `@/components/sections/*` resolves to the canonical tree.
- `app/components/sections/` — Re-export shims so `@/app/components/sections/*` also resolves to the same tree (App Router-friendly alias).
- `components/ui/` — Shared primitives (`Container`, `cn`).
- `content/` — Structured copy (FAQs, personas, feature data, `vercel.json` for project-level deploy hints).
- `lib/` — Shared utilities and brand constants (`lib/brand.ts`, `lib/theme.ts`).
- `public/` — Static assets (favicon, OG image, marketing imagery).

## Reference vs. live site — at a glance

| Label               | URL                                          | What it is                                                                 |
| ------------------- | -------------------------------------------- | -------------------------------------------------------------------------- |
| **Reference site**  | <https://helix-ai-orchestrator.vercel.app>   | External visual / brand reference only. **Not** deployed from this repo.  |
| **Live site**       | `brand.url` (see `lib/brand.ts`)             | This repo, deployed to its own domain once configured in `lib/brand.ts`.  |

## License

See repository metadata.