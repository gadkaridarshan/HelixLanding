// helix: components/layout/Footer.tsx
/**
 * @helix:story USER-986000
 *
 * Footer — bottom-of-page chrome with brand and link lists.
 */

import type { ReactElement } from "react";

import { brand } from "@/lib/brand";

export function Footer(): ReactElement {
  return (
    <footer className="border-t border-white/5 bg-ink-950/80">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-4 px-4 py-10 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <p className="text-sm text-ink-400">
          © {new Date().getFullYear()} {brand.name}. All rights reserved.
        </p>
        <p className="text-sm text-ink-400">
          <a className="hover:text-ink-50" href={brand.url}>
            {brand.url}
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;