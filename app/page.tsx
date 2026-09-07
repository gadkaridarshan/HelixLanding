## Live site vs. reference site

There are **two** distinct URLs and they refer to **different** sites. Do not conflate them.

- **Live site (this product):** the value of `brand.url` in [`lib/brand.ts`](./lib/brand.ts). This is the canonical production URL that Vercel will deploy this workspace to, and it is the only URL that should ever be described as "live", "production", or "deployed" for this product.
- **Reference site:** [helix-ai-orchestrator.vercel.app](https://helix-ai-orchestrator.vercel.app) — an externally-hosted Helix deployment used purely as a visual / brand reference. It is **not** the live landing page for this product, it is **not** deployed from this repo, and visitors must not be led to believe that following that link returns them to the site they are currently viewing.

Anywhere the reference URL is rendered on the live site (Footer, README badge, etc.) it **must** be labelled as a "reference site" link, never as the live site, deployment, or production URL. See [`components/sections/Footer.tsx`](./components/sections/Footer.tsx) for the canonical pattern.

## Deployment

This site is a standard Next.js (App Router) project and deploys to Vercel with zero configuration:

1. Push the branch to GitHub.
2. Import the repository in Vercel.
3. Accept the auto-detected framework settings.
4. Deploy.

The canonical production URL is whatever Vercel assigns to the deployment — keep `brand.url` in `lib/brand.ts` in sync if you move the project.

## Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript** with full strict mode
- **Tailwind CSS v4** (no `tailwind.config.ts` — theme tokens live in `app/globals.css`)
- Fully static, no backend services

## License

MIT — see [LICENSE](./LICENSE).