// helix: components/landing/footer/Footer.tsx
/**
 * @helix:story USER-303000
 * @helix:story USER-384000
 * @helix:story USER-440000
 * @helix:story USER-633000
 * @helix:story USER-868000
 *
 * Canonical Footer implementation. The `components/sections/Footer.tsx`
 * and `app/components/sections/Footer.tsx` shims both re-export from
 * here. All reference-site copy lives in this single file so it can
 * never drift between the live landing page and any test surface.
 *
 * The reference-site link points to `helix-ai-orchestrator.vercel.app`,
 * which is an externally-hosted Helix deployment used purely as a visual
 * / brand reference. It is **NOT** the live landing page for this product
 * and it is **NOT** deployed from this repository. The canonical live URL
 * for this product lives in `lib/brand.ts` (`brand.url`).
 */
import * as React from "react";

export { Footer } from "@/components/sections/Footer";
export { default } from "@/components/sections/Footer";
export type { FooterProps, FooterColumn, FooterLink } from "@/components/sections/Footer";