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