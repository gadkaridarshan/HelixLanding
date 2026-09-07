## Local development

1. **Install dependencies**

    ```bash
    npm install
    ```

2. **Configure environment (optional)**

    Defaults already match `lib/brand.ts`. Copy the template only if you want to override the canonical URL:

    ```bash
    cp .env.example .env.local
    ```

    Edit `.env.local` and set `NEXT_PUBLIC_BRAND_URL` to your preview/production domain.

3. **Start the dev server**

    ```bash
    npm run dev
    ```

    Open <http://localhost:3000>.

4. **Verify success checks**

    - The home page loads with the navbar, hero, StatsBar, Features, HowItWorks, Personas, FAQ, FinalCTA, and footer.
    - The browser tab title is `Helix — Atomic work breakdown for AI coding agents`.
    - View source: you see `<link rel="canonical">`, OG and Twitter `<meta>` tags, and a sitemap link.
    - `/sitemap.xml` returns a valid `sitemap` XML response.
    - `/robots.txt` returns the production allow/deny rules.

5. **Lint and type-check**

    ```bash
    npm run lint
    npm run typecheck
    ```

6. **Production build**

    ```bash
    npm run build
    npm run start     # serves the built site on http://localhost:3000
    ```

## Project structure