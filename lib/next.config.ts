## Local development

1. **Install dependencies**

    ```bash
    npm install
    ```

2. **Configure environment (optional)**

    Defaults already match the canonical production URL. Copy the template only if you want to override it:

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

    - The home page loads with a dark, on-brand scaffold and the hero `<Section>` rendered through the shared `components/Section.tsx` wrapper.
    - The browser tab title is `Helix · AI orchestrator`.
    - View source: you see `<link rel="canonical">`, OG and Twitter `<meta>` tags.
    - The body uses the Geist Sans family (no FOUT, fonts are preloaded).

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