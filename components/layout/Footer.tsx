// helix: components/layout/Footer.tsx
/**
 * @helix:story USER-986000
 *
 * Footer — closing chrome with minimal links. The full footer lands
 * with the Footer card.
 */
import type { ReactElement } from "react";

import { brand } from "@/lib/brand";

export function Footer(): ReactElement {
  return (
    <footer className="border-t border-white/5 bg-ink-950/60 py-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-4 text-sm text-ink-400 sm:flex-row sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="https://github.com/gadkaridarshan/Helix" className="hover:text-ink-50">
            GitHub
          </a>
          <a href={brand.url} className="hover:text-ink-50">
            Live site
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;