import type { ReactElement } from "react";

import { Footer } from "@/components/sections/Footer";

export default function HomePage(): ReactElement {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Footer />
    </main>
  );
}