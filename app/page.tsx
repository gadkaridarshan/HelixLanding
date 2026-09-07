// helix: app/page.tsx
/**
 * @helix:story USER-285000
 *
 * Home page composition root — composes the global Navbar, the
 * section narrative, and the shared Footer inside the layout
 * chrome established by `app/layout.tsx`.
 *
 * The actual section narrative is owned by
 * `@/components/landing/Sections`, which is the single source of
 * truth for narrative order. Keep this file minimal so future
 * page-level concerns (analytics, structured data, etc.) can be
 * added here without touching section code.
 */
import type { ReactElement } from "react";

import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { Sections } from "@/components/landing/Sections";

export default function Page(): ReactElement {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main id="main">
        <Sections />
      </main>
      <Footer />
    </div>
  );
}