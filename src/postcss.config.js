## Deployment to Vercel

1. **Install the Vercel CLI (optional, for one-off deploys)**

    ```bash
    npm i -g vercel
    ```

2. **First-time setup**

    ```bash
    vercel login
    vercel link        # creates .vercel/ and links the project
    ```

3. **Deploy**

    ```bash
    vercel --prod      # production deploy
    # or
    vercel             # preview deploy
    ```

    Vercel auto-detects Next.js, installs dependencies from `package.json`, runs `npm run build`, and serves the output. No extra config required.

## Answer: How do I scaffold and deploy this site?

1. `npm install` to pull dependencies.
2. `npm run dev` to start the dev server at <http://localhost:3000>.
3. `npm run build && npm run start` to verify the production build.
4. `vercel --prod` to ship to production.

The scaffold provides:

- `app/layout.tsx` with full metadata (title, OG, Twitter, canonical, theme color) and Geist font wiring.
- `app/page.tsx` as the section composer (currently renders the hero `<Section>` placeholder; additional section cards mount into this file).
- `components/Section.tsx` — the shared wrapper used by every section card for consistent padding, optional eyebrow/heading/description, accessible `aria-labelledby`, and tone variants.
- `lib/cn.ts` — single class-name helper used everywhere, so future sections share one utility instead of importing `clsx` ad-hoc.
- Tailwind v4 via PostCSS (`postcss.config.js` + `tailwind.config.ts`) plus the base CSS tokens in `app/globals.css`.