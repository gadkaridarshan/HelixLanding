<!-- helix: README.md -->
# Helix Landing

Marketing site for **Helix** — the atomic work-breakdown orchestrator for AI coding agents.

> Live: <https://helix-ai-orchestrator.vercel.app>
> Source: <https://github.com/gadkaridarshan/Helix>

## Prerequisites

- **Node.js** ≥ 20.x
- **npm** ≥ 10.x (or pnpm / yarn — commands below use npm)
- A Vercel account (only required for deployment)

## Quick start

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the dev server**

   ```bash
   npm run dev
   ```

   Open <http://localhost:3000> — the landing page hot-reloads on save.

3. **Type-check the project**

   ```bash
   npm run type-check
   ```

   Should report `0 errors`.

4. **Production build**

   ```bash
   npm run build
   npm run start
   ```

   `npm run start` boots the optimized build on port 3000.

## Deploy to Vercel

The repo is a standard Next.js (App Router) project and works out-of-the-box:

### Option A — Vercel CLI (recommended for this repo)

```bash
npm i -g vercel
vercel login
vercel        # preview deployment
vercel --prod # production deployment
```

### Option B — Git integration

1. Push the repo to GitHub/GitLab/Bitbucket.
2. Visit <https://vercel.com/new> and **Import Project**.
3. Vercel auto-detects Next.js. Leave defaults:
   - Build command: `next build`
   - Output: `.next`
   - Install command: `npm install`
4. Click **Deploy**. The first build takes ~1–2 minutes; subsequent deploys are cached.

## Project layout