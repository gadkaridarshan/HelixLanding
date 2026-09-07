// helix: app/page.tsx
import type { ReactElement } from "react";

import { Sections } from "@/components/landing/Sections";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";

export default function Page(): ReactElement {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Sections />
      </main>
      <Footer />
    </div>
  );
}