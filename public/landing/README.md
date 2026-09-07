# Helix Landing

Marketing site for **Helix** — the atomic work-breakdown orchestrator for AI coding agents.

> The canonical production URL is configured in `lib/brand.ts` (`brand.url`). Override it via the `NEXT_PUBLIC_BRAND_URL` env var if you ship to a custom domain.

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
    - Lighthouse Performance ≥ 95 (no client JS on the chrome, server components everywhere).

## Build

```bash
npm run build
```

A successful build ends with `✓ Compiled successfully` and a route summary listing `/`, `/_not-found`, `/robots.txt`, `/sitemap.xml`, and `/favicon.ico`.

Run the production server locally:

```bash
npm run start
```

## Project structure