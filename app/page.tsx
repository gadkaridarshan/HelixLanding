**Verify:** the CLI prints `✓ Production: https://<your-project>.vercel.app [copied to clipboard]` and the deployed URL returns HTTP 200 with the hero rendered.

### Option B — Git integration

1. Push the repo to GitHub / GitLab / Bitbucket.
2. Visit <https://vercel.com/new> and **Import Project**.
3. Vercel auto-detects Next.js. Leave defaults:
   - Build command: `next build`
   - Output: `.next`
   - Install command: `npm install`
4. Click **Deploy**. The first build takes ~1–2 minutes; subsequent deploys are cached.

**Verify:** the Vercel dashboard shows a green ✓ on the latest deployment, and the assigned domain loads the landing page end-to-end.

> The canonical production URL for **this** live site is defined in `lib/brand.ts` (`brand.url`) and can be overridden via the `NEXT_PUBLIC_BRAND_URL` environment variable. It is **not** the reference URL listed at the top of this README — that one points only to an external visual reference and is not deployed from this repository.

## Project layout

- `app/` — Next.js App Router entry (`layout.tsx`, `page.tsx`, `fonts.ts`, `globals.css`).
- `app/components/sections/**` — Re-export shims so `@/app/components/sections/*` resolves to the canonical implementations under `components/`.
- `components/landing/**` — Canonical section implementations (Hero, Features, HowItWorks, Personas, FinalCTA, FAQ, Navbar, Footer).
- `components/sections/**` — Section-level re-export shims (one per section) so both `@/components/sections/*` and `@/app/components/sections/*` resolve to the same components.
- `components/ui/**` — Shared primitives (`Button`, `Container`, `SectionHeading`, `cn`).
- `content/` — Structured copy (features, personas, FAQ, how-it-works) loaded by the sections.
- `lib/` — Shared utilities and brand constants (`lib/brand.ts`, `lib/theme.ts`).
- `public/` — Static assets (favicon, OG image, marketing imagery).
- `vercel.json` — Vercel framework + headers + rewrite configuration.

## Reference vs. live site — at a glance

| Label              | URL                                            | What it is                                                                 |
| ------------------ | ---------------------------------------------- | -------------------------------------------------------------------------- |
| **Reference site** | <https://helix-ai-orchestrator.vercel.app>     | External visual / brand reference only. **Not** deployed from this repo.   |
| **Live site**      | `brand.url` (see `lib/brand.ts`)               | This repo, deployed to its own domain once configured in `lib/brand.ts`.  |

## Troubleshooting

- **`Module not found: Can't resolve '@/components/...'`** — make sure `tsconfig.json` includes the `@/*` path alias (`"./*"`). It is configured by default in this repo.
- **OG image is missing on social shares** — confirm `/public/og.svg` exists and `lib/brand.ts` `brand.url` matches your deployed domain.
- **Fonts look unstyled** — `next/font/google` requires network access during the first build; in air-gapped environments, pre-cache or self-host the font files.

## License

See repository metadata.