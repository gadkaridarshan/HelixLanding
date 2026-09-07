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

## Project structure