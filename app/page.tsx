The canonical production URL for **this** live site is defined in
`lib/brand.ts` (`brand.url`). It is **not** the reference URL listed
at the top of this README — that one points only to an external
visual reference and is not deployed from this repository.

## Project layout

- `app/` — Next.js App Router entry (layout, pages, global styles)
- `components/landing/` — Canonical section implementations (Hero, Features, HowItWorks, Personas, FinalCTA, FAQ, Navbar, Footer).
- `components/sections/` — Re-export shims so both `@/components/sections/*` and `@/app/components/sections/*` resolve to the same components.
- `components/sections/final-cta/` — Canonical FinalCTA band (USER-63000).
- `components/sections/footer/` — Canonical site footer (USER-63000).
- `components/ui/` — Shared primitives (`Container`, `Button`, `cn`).
- `content/` — Structured content (copy, FAQs, feature data)
- `lib/` — Shared utilities and brand constants (`lib/brand.ts`)
- `public/` — Static assets (favicon, OG image, marketing imagery)
- `vercel.json` — Vercel project config (framework, headers, cache).

## Reference vs. live site — at a glance

| Label               | URL                                          | What it is                                                                 |
| ------------------- | -------------------------------------------- | -------------------------------------------------------------------------- |
| **Reference site**  | <https://helix-ai-orchestrator.vercel.app>   | External visual / brand reference only. **Not** deployed from this repo.  |
| **Live site**       | `brand.url` (see `lib/brand.ts`)             | This repo, deployed to its own domain once configured in `lib/brand.ts`.   |

## License

See repository metadata.