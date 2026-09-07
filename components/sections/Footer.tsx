// helix: components/sections/Footer.tsx
/**
 * @helix:story USER-384000
 * @helix:story USER-440000
 * @helix:story USER-868000
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
 * The visible link text, the badge, the surrounding paragraph, and the
 * accessible name all make it explicit that this outbound link goes to a
 * *reference site*, not to the live Helix landing page. Visitors should
 * not be misled into thinking following this link will take them to the
 * deployed version of the site they are currently viewing.
 */
import * as React from "react";

import { brand } from "@/lib/brand";

const REFERENCE_SITE_URL = "https://helix-ai-orchestrator.vercel.app";

export interface FooterLink {
  readonly label: string;
  readonly href: string;
  readonly external?: boolean;
}

export interface FooterColumn {
  readonly title: string;
  readonly links: ReadonlyArray<FooterLink>;
}

export interface FooterProps {
  className?: string;
}

const PRODUCT_LINKS: ReadonlyArray<FooterLink> = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Personas", href: "#personas" },
  { label: "FAQ", href: "#faq" },
];

const COMPANY_LINKS: ReadonlyArray<FooterLink> = [
  { label: "About Helix", href: "#about" },
  { label: "Changelog", href: "#changelog" },
  { label: "Contact", href: "mailto:hello@helix.dev" },
];

const LEGAL_LINKS: ReadonlyArray<FooterLink> = [
  { label: "Privacy", href: "#privacy" },
  { label: "Terms", href: "#terms" },
  { label: "Security", href: "#security" },
];

export function Footer({ className }: FooterProps): React.ReactElement {
  return (
    <footer
      className={
        "relative border-t border-white/10 bg-slate-950/80 backdrop-blur-sm " +
        (className ?? "")
      }
      aria-labelledby="footer-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand block */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-cyan-400 to-violet-500 text-slate-950 font-bold"
              >
                H
              </span>
              <span className="text-base font-semibold text-white">
                {brand.name}
              </span>
            </div>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              {brand.tagline}
            </p>
          </div>

          {/* Link columns */}
          <nav aria-label="Footer">
            <div className="grid grid-cols-2 gap-8 md:col-span-3 md:grid-cols-3">
              <FooterColumnBlock title="Product" links={PRODUCT_LINKS} />
              <FooterColumnBlock title="Company" links={COMPANY_LINKS} />
              <FooterColumnBlock title="Legal" links={LEGAL_LINKS} />
            </div>
          </nav>
        </div>

        {/* Reference-site callout — explicit, never labelled as the live site. */}
        <div className="mt-12 rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className="mt-0.5 inline-flex shrink-0 items-center rounded-full border border-cyan-300/40 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-cyan-200"
              >
                Reference site
              </span>
              <p className="text-sm text-slate-300 leading-relaxed">
                Looking for an existing Helix deployment to compare against? The
                link below is an externally-hosted Helix instance used purely
                as a visual and brand reference. It is{" "}
                <strong className="font-semibold text-white">not</strong> the
                live landing page for this product, and it is{" "}
                <strong className="font-semibold text-white">not</strong>{" "}
                deployed from this repository.
              </p>
            </div>
            <a
              href={REFERENCE_SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit the Helix reference site (external, not the live deployment of this product)"
              className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-md border border-cyan-300/30 bg-slate-900/60 px-3 py-2 text-xs font-medium text-cyan-100 transition hover:border-cyan-200/60 hover:text-white sm:self-auto"
            >
              View reference site
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="none"
                className="h-3.5 w-3.5"
              >
                <path
                  d="M7 5l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <p>
            Live site for this product:{" "}
            <a
              href={brand.url}
              className="text-slate-300 underline-offset-2 hover:text-white hover:underline"
            >
              {brand.url}
            </a>
          </p>
        </div>
      </div>

      {/* Accessible heading for the footer landmark. */}
      <h2 id="footer-heading" className="sr-only">
        Site footer
      </h2>
    </footer>
  );
}

function FooterColumnBlock({
  title,
  links,
}: {
  readonly title: string;
  readonly links: ReadonlyArray<FooterLink>;
}): React.ReactElement {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
        {title}
      </h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => {
          const isExternal = link.external ?? false;
          return (
            <li key={`${title}-${link.label}`}>
              <a
                href={link.href}
                {...(isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="text-sm text-slate-400 transition hover:text-white"
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Footer;