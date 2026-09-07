// helix: components/Footer.tsx
/**
 * @helix:story USER-915000
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
              className="inline-flex items-center gap-2 text-ink-100"
            >
              <span
                aria-hidden="true"
                className="inline-block h-6 w-6 rounded-md
                           bg-[conic-gradient(from_220deg_at_50%_50%,#22d3ee_0deg,#7c3aed_140deg,#22d3ee_360deg)]
                           shadow-[0_0_24px_-4px_rgba(34,211,238,0.6)]"
              />
              <span className="font-mono text-base font-semibold tracking-tight">
                {brand.name}
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-6 text-ink-300">
              {brand.description}
            </p>

            {/* Social links */}
            <ul className="mt-6 flex items-center gap-3" aria-label="Social links">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.external ? "_blank" : undefined}
                    rel={social.external ? "noopener noreferrer" : undefined}
                    aria-label={social.label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full
                               border border-white/10 bg-white/5 text-ink-200
                               transition-colors hover:border-brand-500/40 hover:bg-white/10 hover:text-ink-50"
                  >
                    <span className="font-mono text-xs">
                      {social.label.charAt(0)}
                    </span>
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
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-ink-400">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="text-sm text-ink-200 transition-colors hover:text-ink-50"
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

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-ink-400">
            © {year} {brand.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-500">
            Built with Helix
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;