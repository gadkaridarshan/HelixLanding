// helix: components/Footer.tsx
/**
 * @helix:story USER-812000
 *
 * Footer — site-wide footer with brand wordmark, Product / Resources /
 * Company / Legal link columns, social links, copyright, and a
 * "Built with Helix" wordmark.
 *
 * Lives at the canonical path `components/Footer.tsx` (this file).
 * Re-export shims at `components/sections/Footer.tsx` and
 * `app/components/sections/Footer.tsx` point here so both import
 * paths resolve to the same implementation.
 *
 * Pure server component. Brand surface (name, canonical URL,
 * GitHub URL) is sourced from `lib/brand.ts` so the same identity
 * shows up in `<title>`, OG cards, FinalCTA, and this footer
 * without duplication.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { brand } from "@/lib/brand";

export interface FooterProps {
  className?: string;
}

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterColumn {
  title: string;
  links: ReadonlyArray<FooterLink>;
}

interface SocialLink {
  label: string;
  href: string;
  external?: boolean;
}

const productLinks: ReadonlyArray<FooterLink> = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Personas", href: "#personas" },
  { label: "FAQ", href: "#faq" },
  { label: "Final CTA", href: "#final-cta" },
];

const resourcesLinks: ReadonlyArray<FooterLink> = [
  { label: "GitHub", href: brand.githubUrl, external: true },
  { label: "Live orchestrator", href: brand.url, external: true },
  { label: "Reference site", href: brand.referenceUrl, external: true },
  { label: "Contact", href: `mailto:${brand.contactEmail}`, external: true },
];

const companyLinks: ReadonlyArray<FooterLink> = [
  { label: "About Helix", href: `${brand.url}#about`, external: true },
  { label: "Roadmap", href: `${brand.url}#roadmap`, external: true },
  { label: "Brand assets", href: `${brand.url}#brand`, external: true },
];

const legalLinks: ReadonlyArray<FooterLink> = [
  { label: "Privacy", href: `${brand.url}#privacy`, external: true },
  { label: "Terms", href: `${brand.url}#terms`, external: true },
  { label: "Security", href: `${brand.url}#security`, external: true },
];

const footerColumns: ReadonlyArray<FooterColumn> = [
  { title: "Product", links: productLinks },
  { title: "Resources", links: resourcesLinks },
  { title: "Company", links: companyLinks },
  { title: "Legal", links: legalLinks },
];

const socialLinks: ReadonlyArray<SocialLink> = [
  {
    label: "GitHub",
    href: brand.githubUrl,
    external: true,
  },
  {
    label: "X",
    href: "https://x.com/helix_ai",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/helix-ai",
    external: true,
  },
];

export function Footer({ className }: FooterProps): React.ReactElement {
  const year = new Date().getFullYear();

  return (
    <footer
      aria-labelledby="footer-heading"
      className={
        "relative isolate overflow-hidden border-t border-white/10 bg-ink-950 " +
        (className ?? "")
      }
    >
      <h2 id="footer-heading" className="sr-only">
        {brand.name} — site footer
      </h2>

      {/* Subtle layered glow at the top of the footer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-24 h-48
                   bg-[radial-gradient(60%_60%_at_50%_0%,rgba(34,211,238,0.18),rgba(124,58,237,0.10)_55%,transparent_80%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0
                   bg-[linear-gradient(to_bottom,rgba(2,6,23,0)_0%,rgba(2,6,23,0.6)_100%)]"
      />

      <Container className="relative py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-5">
            <a
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-ink-50 hover:text-ink-100 transition-colors"
              aria-label={`${brand.name} — go to live site`}
            >
              <span
                aria-hidden="true"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg
                           bg-gradient-to-br from-brand-400 to-accent-500
                           shadow-[0_8px_24px_-8px_rgba(34,211,238,0.55)]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-ink-950"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="2.5" />
                  <ellipse cx="12" cy="12" rx="9" ry="3.5" />
                  <ellipse
                    cx="12"
                    cy="12"
                    rx="9"
                    ry="3.5"
                    transform="rotate(60 12 12)"
                  />
                  <ellipse
                    cx="12"
                    cy="12"
                    rx="9"
                    ry="3.5"
                    transform="rotate(120 12 12)"
                  />
                </svg>
              </span>
              <span className="font-semibold tracking-tight text-lg">
                {brand.name}
              </span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-300">
              {brand.shortDescription}
            </p>

            <a
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full
                         bg-brand-500 px-4 py-2 text-sm font-semibold text-ink-950
                         shadow-[0_8px_30px_-12px_rgba(34,211,238,0.6)]
                         hover:bg-brand-400 active:bg-brand-600 transition-colors"
            >
              Try the orchestrator
              <svg
                viewBox="0 0 20 20"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 10h10" />
                <path d="M11 5l5 5-5 5" />
              </svg>
            </a>

            {/* Socials */}
            <ul className="mt-8 flex items-center gap-3" aria-label="Social links">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${brand.name} on ${social.label}`}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full
                               bg-white/5 text-ink-200 ring-1 ring-inset ring-white/10
                               hover:bg-white/10 hover:text-ink-50 transition-colors"
                  >
                    {social.label === "GitHub" && (
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55v-1.93c-3.2.7-3.87-1.54-3.87-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.95 10.95 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.66.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
                      </svg>
                    )}
                    {social.label === "X" && (
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M18.244 2H21l-6.49 7.41L22 22h-6.797l-4.74-6.207L4.99 22H2.232l6.95-7.937L2 2h6.91l4.286 5.673L18.244 2Zm-1.19 18h1.86L7.04 4H5.067l11.987 16Z" />
                      </svg>
                    )}
                    {social.label === "LinkedIn" && (
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.22 8h4.56v14H.22V8Zm7.32 0h4.37v1.92h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 6.99V22h-4.56v-6.49c0-1.55-.03-3.55-2.16-3.55-2.16 0-2.49 1.69-2.49 3.43V22H7.54V8Z" />
                      </svg>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Link columns */}
          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-7"
          >
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={`${column.title}-${link.label}`}>
                      <a
                        href={link.href}
                        {...(link.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="text-sm text-ink-200 hover:text-ink-50 transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Wordmark + copyright */}
        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-ink-400">
            © {year} {brand.name}. All rights reserved.
          </p>

          <p
            aria-label="Built with Helix"
            className="flex items-center gap-2 font-mono text-xs text-ink-400"
          >
            <span aria-hidden="true">⟢</span>
            Built with
            <span className="font-semibold text-ink-100">{brand.name}</span>
            <span aria-hidden="true">⟣</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;