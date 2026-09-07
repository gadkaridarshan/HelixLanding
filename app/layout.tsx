| Variable                   | Purpose                                                            | Default                                     |
| -------------------------- | ------------------------------------------------------------------ | ------------------------------------------- |
| `NEXT_PUBLIC_BRAND_URL`    | Canonical production URL used by metadata, OG cards, and footer.   | `https://helix-ai-orchestrator.vercel.app`  |

Any variable prefixed with `NEXT_PUBLIC_` is exposed to the browser bundle; keep secrets out of it.

## Deploy to Vercel

This repo is a standard Next.js (App Router) project and is the **live site** for this workspace — distinct from the reference demo linked at the top. `vercel.json` is already configured with `"framework": "nextjs"`, security headers, and long-lived cache headers for `/fonts/*`. Two options:

### Option A — Vercel CLI (recommended for this repo)