// helix: components/sections/footer/Footer.tsx
/**
 * @helix:story USER-63000
 *
 * Footer — closing footer for the Helix landing page. Renders the
 * brand wordmark, a compact link column, and the legal/credit row.
 *
 * Pure server component — no client interactivity. Section id is
 * `footer` for navbar anchors.
 */
import * as React from "react";

import { brand } from "@/lib/brand";

export interface FooterProps {
  className?: string;
}

interface FooterLink {
  readonly label: string;
  readonly href: string;
  readonly external?: boolean;
}

interface FooterColumn {
  readonly title: string;
  readonly links: ReadonlyArray<FooterLink>;
}

const COLUMNS: ReadonlyArray<FooterColumn> = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Personas", href: "#personas" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/docs", external: true },
      { label: "Changelog", href: "/changelog", external: true },
      { label: "Status", href: "/status", external: true },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about", external: true },
      { label: "Contact", href: "mailto:hello@helix.ai", external: true },
      { label: "Press kit", href: "/press", external: true },
    ],
  },
];

function isExternal(href: string): boolean {
  return (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  );
}

export function Footer({ className }: FooterProps): React.ReactElement {
  const year = new Date().getFullYear();

  return (
    <footer
      id="footer"
      aria-labelledby="footer-heading"
      className={
        "relative border-t border-white/10 bg-white/[0.02] py-12 " +
        (className ?? "")
      }
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <h2
            id="footer-heading"
            className="text-base font-semibold text-white"
          >
            {brand.name}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/60">
            {brand.tagline}
          </p>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              {col.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => {
                const external = link.external ?? isExternal(link.href);
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
                      {...(external
                        ? {
                            target: "_blank",
                            rel: "noreferrer noopener",
                          }
                        : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col items-start justify-between gap-3 border-t border-white/5 px-6 pt-6 text-xs text-white/50 sm:flex-row sm:items-center lg:px-8">
        <p>
          © {year} {brand.name}. All rights reserved.
        </p>
        <p>
          Built with atomic units. Verified per change.
        </p>
      </div>
    </footer>
  );
}

export default Footer;