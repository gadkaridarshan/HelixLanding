<!-- helix: README.md -->
# Helix — Landing Page

The marketing surface for **Helix**, the atomic work-breakdown orchestrator.
This Next.js app is the single-route landing page shipped to Vercel.

- Live site: <https://helix-ai-orchestrator.vercel.app>
- Product repo: <https://github.com/gadkaridarshan/Helix>

---

## Prerequisites

- **Node.js 18.17+** (Node 20 LTS recommended)
- **npm 9+** (ships with Node 20)
- A **Vercel** account — <https://vercel.com/signup>
- (Optional) The **Vercel CLI** if you want to deploy from your terminal

Verify your toolchain:

```bash
node --version    # expect v18.17+ or v20+
npm --version     # expect 9+
```

---

## Local development

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:3000)
npm run dev

# 3. Production build (must succeed with zero TS errors)
npm run build
```

If `npm run build` completes with no errors, the site is ready to deploy.

---

## Deploy to Vercel

You have two equally supported paths. Pick one.

### Option A — One command with the Vercel CLI (fastest)

```bash
# Install the Vercel CLI (once)
npm install -g vercel

# Authenticate (opens a browser the first time)
vercel login

# Deploy — first run creates the project, subsequent runs promote to production
vercel deploy --prod
```

That's it. The CLI detects Next.js automatically, runs `next build`, and
publishes to a `*.vercel.app` URL.

### Option B — GitHub-connected Vercel import

1. Push this repo to GitHub.
2. In Vercel, click **Add New → Project → Import Git Repository**.
3. Select the repo. Vercel auto-detects the **Next.js** framework preset.
4. Leave build settings at their defaults (`npm run build`, output `.next`).
5. Click **Deploy**. Every push to `main` redeploys automatically.

---

## Expected success checks

After `vercel deploy --prod` (or a GitHub import deploy), confirm:

- [ ] The deployment URL returns **HTTP 200**
- [ ] The page title is **Helix — Atomic Work-Breakdown Orchestrator**
- [ ] `/og-image.svg` and `/favicon.svg` resolve (check the `<head>`)
- [ ] All sections render in order: Navbar → Hero → Features → HowItWorks → StatsBar → Personas → FAQ → FinalCTA → Footer
- [ ] No errors in the Vercel build log

---

## Project structure (for reference)