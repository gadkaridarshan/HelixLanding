# Helix Landing — public assets

This directory holds static marketing assets for the Helix landing site
(images, OG cards, favicons, downloadable files). Everything here is
served verbatim from `/landing/*` at runtime.

## Live site vs. reference site

There are **two** distinct URLs and they refer to **different** sites:

- **Live site (this product):** the value of `brand.url` in `lib/brand.ts`.
  This is the canonical production URL for this workspace's deployment
  and is the only true "live site" for this product.
- **Reference site:** `https://helix-ai-orchestrator.vercel.app` — used
  purely as a visual / brand reference. It is **not** the live landing
  page for this product, it is **not** deployed from this repo, and
  visitors should not assume following that link takes them to the
  site they are currently viewing.

Any link rendered on the live site that points at the reference URL
**must** be labelled as a reference-site link (see the footer for the
canonical pattern). Do not label it as "live site", "production", or
"deployment" — that misleads visitors.

## Conventions

- One subdirectory per asset family (e.g. `og/`, `favicons/`, `logos/`).
- Filenames are lowercase, hyphen-separated, and self-describing
  (`og-image-1200x630.png`, `favicon-32.png`, `brand-mark-light.svg`).
- Prefer SVG for logos and marks, PNG/JPG only where SVG is not viable
  (favicons at very small sizes, social-card previews).
- Every image gets a meaningful `alt` text in the component that
  renders it; decorative images use `alt=""` and `aria-hidden="true"`.