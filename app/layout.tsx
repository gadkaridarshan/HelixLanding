`vercel --prod` will:

1. Upload the repo to Vercel.
2. Read `vercel.json` → `framework: "nextjs"` → auto-detect build/install commands.
3. Run `npm install && npm run build` and produce `.next/`.
4. Apply the security headers from `vercel.json`
   (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`,
   `Permissions-Policy`) and the long-lived cache headers for
   `/og.svg`, `/favicon.svg`, `/favicon.ico`.
5. Promote the deployment to production.

### Option B — Git integration

1. Push the repo to GitHub/GitLab/Bitbucket.
2. Visit <https://vercel.com/new> and **Import Project**.
3. Vercel reads `vercel.json` and pre-fills the framework settings.
   Leave defaults:
   - Build command: `next build`
   - Output: `.next`
   - Install command: `npm install`
4. Click **Deploy**. The first build takes ~1–2 minutes; subsequent
   deploys are cached.

### Post-deploy verification