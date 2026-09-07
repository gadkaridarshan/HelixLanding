# Helix Landing — Deploy Guide

This guide ships the Helix marketing site to **Vercel** (`vercel --prod`) in a single command, after the prerequisites are met.

The canonical production URL is configured in `lib/brand.ts` (`brand.url`) and is overridable via the `NEXT_PUBLIC_BRAND_URL` environment variable. Default: `https://helix-ai-orchestrator.vercel.app`.

---

## Prerequisites

- **Node.js 20+** (Node 22 LTS recommended).
- **npm 10+** (ships with Node 20). `pnpm` or `yarn` also work — adjust commands below if so.
- A **Vercel account** with the CLI installed and authenticated.
- The `vercel.json` file in the repository root (already committed).

### 1. Verify Node / npm

```bash
node --version    # expected: v20.x or v22.x
npm  --version    # expected: 10.x or higher
```

**Expected:** both commands print a version number and exit 0.

### 2. Install / verify the Vercel CLI

```bash
npm install -g vercel
vercel --version  # expected: 37.x or higher
vercel login      # opens browser, returns "Success!" when done
```

**Expected:** `vercel --version` exits 0 with a version string. `vercel login` returns `Success!` after browser confirmation.

### 3. Confirm the project layout

```bash
ls vercel.json app/sitemap.ts app/robots.ts public/og.svg app/icon.svg app/apple-icon.svg
```

**Expected:** all six files exist. `vercel.json` is the Vercel project config (build/dev/install commands, regions, security headers). `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and `/robots.txt` at runtime. `public/og.svg` is the Open Graph share image. `app/icon.svg` and `app/apple-icon.svg` are picked up by Next.js App Router to emit favicon and apple-touch-icon link tags.

---

## One-time: link the project to Vercel

```bash
vercel link
```

When prompted:

- **Set up "~/.vercel"?** → `Y`
- **Which scope?** → pick your team / personal account
- **Link to existing project?** → `Y` if you've already created the project in the dashboard, otherwise `N` to create one
- **Project name?** → `helix-landing` (or whatever you prefer)
- **In which directory is your code located?** → `./`

**Expected:** a `.vercel/` directory is created with `project.json` and `README.md`. The CLI prints `Linked to <scope>/<project>`.

---

## Deploy to production

### Quick deploy

```bash
vercel --prod
```

This runs `npm install` → `next build` → `next start` against Vercel's edge, using the `vercel.json` config (regions: `iad1`, security headers, cache rules). Takes ~1–2 minutes for the first deploy, ~30s for cached re-deploys.

**Expected:** CLI ends with: