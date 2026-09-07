// helix: components/landing/footer/Footer.tsx
/**
 * @helix:story USER-956000
 *
 * Footer — site-wide footer with brand mark, Product / Resources
 * / Company / Legal link columns, social links, a GitHub star CTA,
 * a Vercel deploy reference, and copyright.
 *
 * Pure server component. Brand surface (name, canonical URL,
 * GitHub URL) is sourced from `lib/brand.ts` so the same identity
 * shows up in `<title>`, OG cards, and this footer without
 * duplication.
 *
 * Lives at the canonical path `components/landing/footer/Footer.tsx`.
 * Re-export shims at `components/Footer.tsx`,
 * `components/sections/Footer.tsx`, and
 * `app/components/sections/Footer.tsx` point here so all import
 * paths resolve to the same implementation.
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
}

const productLinks: ReadonlyArray<FooterLink> = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Personas", href: "#personas" },
  { label: "FAQ", href: "#faq" },
];

const resourcesLinks: ReadonlyArray<FooterLink> = [
  { label: "GitHub", href: brand.githubUrl, external: true },
  { label: "Live orchestrator", href: brand.url, external: true },
];

const companyLinks: ReadonlyArray<FooterLink> = [
  { label: "Contact", href: `mailto:${brand.contactEmail}` },
];

const legalLinks: ReadonlyArray<FooterLink> = [
  { label: "Privacy", href: "#privacy" },
  { label: "Terms", href: "#terms" },
];

const columns: ReadonlyArray<FooterColumn> = [
  { title: "Product", links: productLinks },
  { title: "Resources", links: resourcesLinks },
  { title: "Company", links: companyLinks },
  { title: "Legal", links: legalLinks },
];

const socialLinks: ReadonlyArray<SocialLink> = [
  { label: "GitHub", href: brand.githubUrl },
];

function GitHubIcon(): React.ReactElement {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.07c-3.2.7-3.87-1.37-3.87-1.37-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.96 10.96 0 0 1 5.74 0c2.18-1.49 3.14-1.18 3.14-1.18.62 1.59.23 2.76.11 3.05.73.8 1.18 1.82 1.18 3.08 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

export function Footer({ className }: FooterProps): React.ReactElement {
  const year = new Date().getFullYear();
  return (
    <footer
      aria-labelledby="footer-heading"
      className={
        "relative isolate border-t border-white/10 bg-slate-950/60 " +
        (className ?? "")
      }
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/40 to-transparent"
      />

      <h2 id="footer-heading" className="sr-only">
        Site footer
      </h2>

      <Container className="py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand column */}
          <div className="md:col-span-5">
            <a
              href="#hero"
              className="inline-flex items-center gap-2 text-base font-semibold text-ink-50"
            >
              <span
                aria-hidden="true"
                className="inline-block h-6 w-6 rounded-md bg-gradient-to-br from-brand-400 via-aurora-400 to-accent-400 shadow-[0_0_20px_-2px_rgba(34,211,238,0.55)]"
              />
              <span className="font-mono tracking-tight">{brand.name}</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-400">
              {brand.shortDescription}
            </p>

            {/* GitHub star CTA */}
            <a
              href={brand.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-ink-100 transition-colors hover:border-white/30 hover:bg-white/10"
            >
              <GitHubIcon />
              <span>Star on GitHub</span>
            </a>

            {/* Vercel deploy reference */}
            <p className="mt-6 text-xs leading-relaxed text-ink-500">
              Deployed on{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noreferrer noopener"
                className="text-ink-300 underline decoration-white/20 underline-offset-2 hover:text-ink-100"
              >
                Vercel
              </a>
              . Source:{" "}
              <a
                href={brand.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="text-ink-300 underline decoration-white/20 underline-offset-2 hover:text-ink-100"
              >
                github.com/{brand.name.toLowerCase()}
              </a>
              .
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 md:col-span-7">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-400">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-ink-300 transition-colors hover:text-ink-50"
                        {...(link.external
                          ? {
                              target: "_blank",
                              rel: "noreferrer noopener",
                            }
                          : {})}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-ink-500 sm:flex-row sm:items-center">
          <p>
            © {year} {brand.name}. All rights reserved.
          </p>
          <p className="font-mono tracking-tight">
            Built with <span className="text-brand-300">{brand.name}</span>.
          </p>
          <ul className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={social.label}
                  className="text-ink-400 transition-colors hover:text-ink-100"
                >
                  <GitHubIcon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;