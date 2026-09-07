// helix: app/page.tsx
/**
 * @helix:story USER-217000
 * @helix:story USER-956000
 *
 * Helix landing page — assembled, single-route marketing page.
 *
 * This file is intentionally thin: it composes the section root
 * (`components/landing/Sections.tsx`) which owns the full narrative
 * order. Individual sections are server components (or thin "use
 * client" islands where interactivity is required), imported from
 * `components/landing` and `app/components/sections` so the page file
 * itself stays a clean composition surface with no inline business
 * logic.
 *
 * This is the entry route for the Vercel deployment.
 */

import type { ReactElement } from "react";

import { Sections } from "@/components/landing/Sections";

export default function Page(): ReactElement {
  return <Sections />;
}