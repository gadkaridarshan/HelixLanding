// helix: components/landing/footer/Footer.tsx
/**
 * @helix:story USER-303000
 *
 * Footer — site chrome with link columns, brand mark, and a clearly-labelled
 * reference-site pointer.
 *
 * The reference-site link points to `helix-ai-orchestrator.vercel.app`,
 * which is an externally-hosted Helix deployment used purely as a visual
 * / brand reference. It is **NOT** the live landing page for this product,
 * it is **NOT** deployed from this repository, and the canonical live URL
 * for this product lives in `lib/brand.ts` (`brand.url`).
 *
 * Every piece of UI that surfaces this URL — the visible link text, the
 * badge, the surrounding paragraph, and the accessible name — makes it
 * explicit that:
 *
 *   1. The link goes to a **reference site** (visual / brand reference only).
 *   2. It is **not** the live landing page for this product.
 *   3. The live landing page for this product is a **different site**,
 *      deployed at the URL configured in `lib/brand.ts` (`brand.url`).
 *
 * Visitors should not be misled into thinking that following this link
 * will take them back to the site they are currently viewing.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { brand } from "@/lib/brand";

interface FooterColumn {
  heading: string;
  links: ReadonlyArray<{ label: string; href: string }>;
}

const COLUMNS: ReadonlyArray<FooterColumn> = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Personas", href: "#personas" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    heading: "Get involved",
    links: [
      {
        label: "Request early access",
        href: "mailto:hello@helix.dev",
      },
      { label: "Source on GitHub", href: brand.repoUrl },
    ],
  },
  {
    heading: "Reference",
    links: [
      {
        label: "Reference site (visual only)",
        href: brand.referenceUrl,
      },
    ],
  },
];

export function Footer(): React.ReactElement {
  return (
    <footer
      aria-labelledby="footer-heading"
      className="relative border-t border-helix-border bg-black/20 py-16"
    >
      <h2 id="footer-heading" className="sr-only">
        Site footer
      </h2>

      <Container size="lg">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="grid h-8 w-8 place-items-center rounded-lg border border-helix-border-strong bg-gradient-to-br from-cyan-400/30 to-violet-500/30 text-sm font-bold text-helix-text"
              >
                {brand.mark}
              </span>
              <span className="font-semibold tracking-tight text-helix-text">
                {brand.name}
              </span>
            </div>
            <p className="mt-4 text-sm text-helix-text-muted">
              Atomic work-breakdown for AI coding agents.
            </p>

            <div className="mt-6 rounded-lg border border-amber-400/30 bg-amber-400/[0.06] p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                Reference site
              </p>
              <p className="mt-2 text-xs leading-relaxed text-helix-text-muted">
                The link below is to a{" "}
                <span className="font-semibold text-helix-text">
                  visual / brand reference
                </span>{" "}
                deployment. It is{" "}
                <span className="font-semibold text-helix-text">
                  not
                </span>{" "}
                this product's live landing page and is{" "}
                <span className="font-semibold text-helix-text">
                  not
                </span>{" "}
                deployed from this repository.
              </p>
              <a
                href={brand.referenceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-amber-300 underline-offset-4 hover:underline"
                aria-label="Reference site for Helix (visual / brand reference only — opens in a new tab)"
              >
                {brand.referenceUrl.replace(/^https?:\/\//, "")}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-helix-text">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-helix-text-muted transition-colors hover:text-helix-text"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-helix-border pt-6 text-xs text-helix-text-dim sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {brand.name}. Built with Next.js.
          </p>
          <p>
            Live site:{" "}
            <a
              href={brand.url}
              className="text-helix-text-muted underline-offset-4 hover:text-helix-text hover:underline"
            >
              {brand.url.replace(/^https?:\/\//, "")}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;