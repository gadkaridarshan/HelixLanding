// helix: components/layout/Footer.tsx
/**
 * @helix:story USER-986000
 *
 * Footer — closing chrome. Minimal copyright + GitHub + live-site
 * links. Designed to render cleanly against the brand gradient
 * background defined in `app/globals.css`.
 */
import type { ReactElement } from "react";

import { brand } from "@/lib/brand";

export function Footer(): ReactElement {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-brand-ink/60 py-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-4 text-sm text-ink-400 sm:flex-row sm:px-6 lg:px-8">
        <p>
          © {year} {brand.name}. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            href={brand.github}
            className="transition hover:text-ink-50"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a
            href={brand.url}
            className="transition hover:text-ink-50"
            rel="noreferrer"
            target="_blank"
          >
            Live site
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;