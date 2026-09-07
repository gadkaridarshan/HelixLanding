// helix: app/page.tsx
/**
 * @helix:story USER-349000
 *
 * Helix landing page — single-route marketing page.
 *
 * This file is intentionally thin: it composes the layout chrome
 * (Navbar + Footer) around the section composition root
 * (`components/landing/Sections.tsx`). The page file itself stays a
 * clean composition surface with no inline business logic, so the
 * card scope (USER-349000) owns the full narrative and ordering
 * while downstream section cards can iterate on individual
 * sections without touching this entry route.
 *
 * This is the entry route for the Vercel deployment.
 */

import type { ReactElement } from "react";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Sections } from "@/components/landing/Sections";

export default function Page(): ReactElement {
  return (
    <>
      <Navbar />
      <main id="main" className="relative">
        <Sections />
      </main>
      <Footer />
    </>
  );
}