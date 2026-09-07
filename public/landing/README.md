# Helix Landing

Marketing site for **Helix** — the atomic work-breakdown orchestrator for AI coding agents.

> The canonical production URL is configured in `lib/brand.ts` (`brand.url`). Override it via the `NEXT_PUBLIC_BRAND_URL` env var if you ship to a custom domain. The production site lives at **<https://helix-ai-orchestrator.vercel.app/>**.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-149eca?logo=react)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?logo=tailwindcss)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript)](https://www.typescriptlang.org)

---

## What is this?

A single-page, server-rendered marketing site for the **Helix AI Orchestrator** ([live site](https://helix-ai-orchestrator.vercel.app/), [GitHub](https://github.com/gadkaridarshan/Helix)). Helix decomposes a natural-language goal into dependency-aware, atomic PRs, runs them in isolated worktrees, and ships review-ready code.

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

1. **Install dependencies**

    ```bash
    npm install
    ```

2. **Configure environment (optional)**

    Defaults already match `lib/brand.ts`. Copy the template only if you want to override the canonical URL:

    ```bash
    cp .env.example .env.local
    ```

    Edit `.env.local` and set `NEXT_PUBLIC_BRAND_URL` to your preview/production domain.

3. **Start the dev server**

    ```bash
    npm run dev
    ```

    Open <http://localhost:3000>.

4. **Verify success checks**

    - The home page loads with the navbar, hero, StatsBar, Features, HowItWorks, Personas, FAQ, FinalCTA, and footer.
    - The browser tab title is `Helix — Atomic work breakdown for AI coding agents`.
    - View source: you see `<link rel="canonical">`, OG and Twitter `<meta>` tags, and a sitemap link.
    - `/sitemap.xml` returns a valid `sitemap` XML response.
    - `/robots.txt` returns the production allow/deny rules.

5. **Lint and type-check**

    ```bash
    npm run lint
    npm run typecheck
    ```

6. **Production build**

    ```bash
    npm run build
    npm run start     # serves the built site on http://localhost:3000
    ```

## Deploy to Vercel

The repo includes a production-ready `vercel.json` with security headers (HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy, nosniff), static-asset caching rules, and a `/home → /` redirect. Pick **one** of the following flows.

### Option A — Vercel Dashboard (recommended for first deploy)

1. Push the repo to GitHub/GitLab/Bitbucket.
2. Go to <https://vercel.com/new> and **Import** the project.
3. Vercel auto-detects **Next.js** and uses the defaults from `vercel.json` (build command: `next build`, output: `.next`).
4. Set the **Project Name** to `helix-landing` (controls the default `*.vercel.app` subdomain).
5. *(Optional)* Under **Environment Variables**, add `NEXT_PUBLIC_BRAND_URL` if you want a custom canonical domain (e.g. `https://helix.dev`). Defaults already work.
6. Click **Deploy**. The first build runs `npm ci` → `next build` → deploys to a preview URL.
7. Promote to production: **Deployments → ⋯ → Promote to Production**.

### Option B — Vercel CLI (one-shot prod deploy)

1. Install the CLI and log in (once per machine):

    ```bash
    npm i -g vercel
    vercel login
    ```

2. Link the repo to a Vercel project (creates `.vercel/project.json` — commit or gitignore per your team policy):

    ```bash
    vercel link --yes
    ```

3. Deploy a preview build:

    ```bash
    vercel
    ```

4. Ship to production:

    ```bash
    vercel --prod
    ```

    Vercel prints the live URL once the build finishes.

5. Verify the deploy:

    ```bash
    curl -sS https://helix-ai-orchestrator.vercel.app/sitemap.xml | head
    curl -sS https://helix-ai-orchestrator.vercel.app/robots.txt
    curl -sSI https://helix-ai-orchestrator.vercel.app/ | grep -i 'strict-transport-security\|x-frame-options\|referrer-policy'
    ```

    Expect the sitemap body to be valid XML, the robots body to start with `User-agent: *`, and all three security headers to be present in the response.

### Continuous deployment from Git

Once the project is linked, every push to the default branch triggers a production deployment and every PR gets an isolated preview URL. No extra configuration is required.

## SEO and discoverability

- **Canonical URL** — set in `app/layout.tsx` via `metadataBase` (sourced from `lib/brand.ts`). Override with `NEXT_PUBLIC_BRAND_URL`.
- **Open Graph + Twitter Card** — rendered from `app/layout.tsx` metadata; preview at <https://www.opengraph.xyz/> or <https://cards-dev.twitter.com/validator>.
- **`/sitemap.xml`** — served from `public/sitemap.xml`. Re-deploy to refresh `lastmod`.
- **`/robots.txt`** — served from `public/robots.txt`. Allows the entire site, blocks `/api/`, `/_next/`, and `*.json$`.
- **OG image** — `public/og-image.svg` (1200×630). The `sitemap.xml` advertises it via the `image:image` namespace.
- **Web manifest + favicon** — `public/manifest.webmanifest` and `public/favicon.ico`.

After each deploy, ping the indexers so they re-crawl immediately:

```bash
curl "https://www.google.com/ping?sitemap=https%3A%2F%2Fhelix-ai-orchestrator.vercel.app%2Fsitemap.xml"
```

## Project structure