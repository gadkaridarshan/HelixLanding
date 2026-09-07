<!-- helix: README.md -->
# Helix Landing — Scaffold

This is the **scaffold** for the Helix marketing site: a Vercel-ready
Next.js 14 (App Router) project with TypeScript, Tailwind v4, and the
global theme tokens (color palette, gradients, background pattern, type
scale via `next/font`) that every later section re-uses.

> **Note — what this card ships.** This README documents the **scaffold**.
> `app/page.tsx` is intentionally a minimal placeholder; the real
> Navbar / Hero / StatsBar / Features / HowItWorks / Personas /
> FinalCTA / FAQ / Footer sections land in subsequent cards.

> **Reference vs. live.** The URL
> <https://helix-ai-orchestrator.vercel.app> is an externally-hosted
> visual reference only — it is **not** deployed from this repository.
> The canonical production URL for this product is configured in
> `lib/brand.ts` (`brand.url`).

## Prerequisites

- **Node.js** ≥ 20.x (Next.js 14 App Router minimum).
- **npm** ≥ 10.x (commands below assume npm; pnpm/yarn work too).
- A Vercel account — only required for deployment, not for local dev.

## Quick start

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the dev server**

   ```bash
   npm run dev
   ```

   Open <http://localhost:3000>. Hot reload is enabled; saving any file
   under `app/` or `components/` refreshes the page immediately.

   **Success check:** the browser renders the placeholder hero with the
   gradient headline ("Atomic work-breakdown for AI coding agents.")
   over the layered cyan/violet background. No 404s in the network
   panel for fonts or favicon.

3. **Type-check the project**

   ```bash
   npm run typecheck
   ```

   **Success check:** prints `0 errors` and exits 0.

4. **Lint**

   ```bash
   npm run lint
   ```

   **Success check:** exits 0 with no errors.

5. **Production build**

   ```bash
   npm run build
   ```

   **Success check:** ends with `✓ Compiled successfully` and a route
   table that includes `○ /`. No `Module not found` or unresolved
   import warnings.

6. **Run the production build locally**

   ```bash
   npm run start
   ```

   **Success check:** boots on port 3000 and renders the same
   placeholder page as `npm run dev`.

## Project layout