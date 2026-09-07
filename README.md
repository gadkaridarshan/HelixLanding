<!-- helix: README.md -->
# Helix — Landing

The marketing site for **Helix**, the atomic work-breakdown orchestrator. Built with Next.js (App Router) and ready to ship to `vercel.com`.

- Site: <https://helix-ai-orchestrator.vercel.app/>
- Source: <https://github.com/gadkaridarshan/Helix>

## Prerequisites

- Node.js 18.17+ (Node 20 LTS recommended)
- npm 9+ (ships with Node)
- A Vercel account — <https://vercel.com/signup>
- (Optional) Vercel CLI for one-command deploys:
  ```bash
  npm install -g vercel
  ```

## Local development

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:3000)
npm run dev

# 3. Type-check / production build
npm run build
```

If `npm run build` completes with no errors, the site is ready to deploy.

## Deploy to Vercel

You have two equally supported paths. Pick one.

### Option A — One command with the Vercel CLI (fastest)

```bash
# 1. Login once (opens a browser)
vercel login

# 2. Deploy to a preview URL (safe to re-run on every change)
vercel

# 3. Promote the latest preview to production
vercel --prod
```

That is the entire workflow. The CLI auto-detects Next.js, runs `npm run build`, and reuses the `vercel.json` in this repo for headers and caching.

### Option B — GitHub → Vercel import (recommended for teams)

1. Push this repo to GitHub:
   ```bash
   git init
   git add .
   git commit -m "chore: initial landing site"
   git branch -M main
   git remote add origin git@github.com:<you>/HelixLanding.git
   git push -u origin main
   ```
2. Visit <https://vercel.com/new> and **Import** the repository.
3. Vercel auto-detects the Next.js framework preset. Leave defaults:
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
4. Click **Deploy**. Future pushes to `main` redeploy automatically.

## What this repo ships

- `app/page.tsx` — assembled landing page rendering Navbar, Hero, Features, HowItWorks, StatsBar, Personas, FAQ, FinalCTA, Footer in order.
- `app/layout.tsx` — metadata (title, description), OpenGraph + Twitter cards, favicon, robots.
- `public/favicon.svg`, `public/og-image.svg` — brand assets.
- `vercel.json` — framework pin, security headers, asset caching.
- `components/`, `app/components/` — UI primitives and landing sections.

## Deploy checklist (success criteria)

Run these locally before pushing to confirm deploy-readiness:

```bash
# Type-check + production build must exit 0
npm run build

# Lint must be clean (no error-severity diagnostics)
npx tsc --noEmit
```

Both commands must finish with no errors. Vercel runs the same `build` step during deploy, so a clean local build is the strongest signal the deploy will succeed.

## Troubleshooting

- **Build fails on Vercel but passes locally** — clear `.next` and `node_modules` lockfile drift:
  ```bash
  rm -rf .next
  npm ci
  npm run build
  ```
- **`vercel` command not found** — install the CLI globally and re-login:
  ```bash
  npm install -g vercel
  vercel login
  ```
- **Wrong framework detected** — this repo includes `vercel.json` with `"framework": "nextjs"`. Do not delete it.
- **Custom domain** — after the first successful deploy, run `vercel domains add yourdomain.com` and follow the DNS instructions Vercel prints.

## Answer (TL;DR)

To deploy Helix Landing in one command:

```bash
vercel login && vercel --prod
```

Or import the GitHub repo at <https://vercel.com/new> and click **Deploy**. Both paths use the included `vercel.json`, require only Node 18.17+, and need no extra environment variables.