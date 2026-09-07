<!-- helix: README.md -->
# Helix Landing

Marketing site for **Helix** — the atomic work-breakdown orchestrator for AI coding agents.

This repo ships **only the marketing surface** — the orchestrator engine itself lives in the [Helix monorepo](https://github.com/gadkaridarshan/Helix).

## Features

- 🚀 **Static-first** Next.js 16 App Router — zero client JS on the chrome, only one small client island (Personas tabs).
- 🎨 **Tailwind v4** CSS-first tokens — `ink-*`, `brand-*`, `accent-*`, `aurora-*` palettes, no JS Tailwind config file.
- 🔍 **Production SEO** — full Open Graph, Twitter Card, JSON-LD-ready metadata, sitemap, robots, web manifest.
- ♿ **Accessible** — skip-to-content link, keyboard-navigable Personas, focus-visible rings, semantic landmarks.
- 🛡️ **Hardened** — `vercel.json` adds HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy, nosniff.
- 📦 **One-step deploy** — `vercel --prod` is all you need; everything else is config-free.

## Prerequisites

- **Node.js 18.18+** (Node 20 LTS recommended)
- **npm 9+** (or pnpm / yarn — examples use npm)
- A [Vercel](https://vercel.com) account if you plan to deploy with `vercel --prod`
- Git (for cloning + pushing to trigger Vercel git deployments)

Verify your toolchain:

```bash
node --version    # v18.18+ or v20+
npm --version     # 9+
git --version
```

## Local development

1. Install dependencies:

    ```bash
    npm install
    ```

2. Copy the environment template (optional — defaults already match `lib/brand.ts`):

    ```bash
    cp .env.example .env.local
    ```

3. Start the dev server on <http://localhost:3000>:

    ```bash
    npm run dev
    ```

4. Verify the success checks:

    - The home page loads with the hero, every section (StatsBar, Features, HowItWorks, Personas, FAQ), the FinalCTA, and the footer.
    - The browser tab title is `Helix — Atomic work breakdown for AI coding agents`.
    - `<link rel="canonical">` points at the production URL from `lib/brand.ts`.
    - `/sitemap.xml` and `/robots.txt` are served.

## Production build

```bash
npm run build
npm run start
```

This compiles the App Router statically (`output` is the default), generates optimized fonts via `next/font`, and serves the metadata declared in `app/layout.tsx`.

## Deploy to Vercel

```bash
# First time: link this directory to a Vercel project
vercel link

# Ship to production
vercel --prod
```

`vercel.json` at the repo root sets the security headers (HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy, nosniff) and routes the OG/static assets through the edge cache. The legacy `content/vercel.json` file is intentionally a no-op stub kept for backwards compatibility — the authoritative config is `/vercel.json`.

### Custom domain

Override the canonical URL before building:

```bash
echo "NEXT_PUBLIC_BRAND_URL=https://www.example.com" >> .env.production.local
vercel --prod
```

`metadataBase`, the sitemap, and the OG card all derive from `brand.url` so a single env var keeps them in sync.

## Project layout