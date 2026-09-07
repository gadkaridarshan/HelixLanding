// helix: components/Footer.tsx
/**
 * @helix:story USER-63000
 *
 * Footer — site-wide footer with brand wordmark, navigation links,
 * legal links, social links, and a "deployed on Vercel" badge.
 *
 * Pure server component. Brand surface (name, canonical URL, GitHub
 * URL) is sourced from `lib/brand.ts` so the same identity shows up
 * in `<title>`, OG cards, and this footer without duplication.
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
  {
    label: "Reference site",
    href: "https://helix-ai-orchestrator.vercel.app",
    external: true,
  },
  { label: "Deploy on Vercel", href: "https://vercel.com/new", external: true },
  { label: "Next.js docs", href: "https://nextjs.org/docs", external: true },
];

const companyLinks: ReadonlyArray<FooterLink> = [
  { label: "About", href: "#hero" },
  { label: "Personas", href: "#personas" },
  { label: "Early access", href: brand.url, external: true },
];

const legalLinks: ReadonlyArray<FooterLink> = [
  { label: "MIT License", href: `${brand.githubUrl}/blob/main/LICENSE`, external: true },
  { label: "Privacy", href: `${brand.url}/privacy` },
  { label: "Terms", href: `${brand.url}/terms` },
];

const socialLinks: ReadonlyArray<SocialLink> = [
  { label: "GitHub", href: brand.githubUrl },
  { label: "X / Twitter", href: "https://twitter.com/helix" },
  { label: "Discord", href: "https://discord.gg/helix" },
];

const columns: ReadonlyArray<FooterColumn> = [
  { title: "Product", links: productLinks },
  { title: "Resources", links: resourcesLinks },
  { title: "Company", links: companyLinks },
  { title: "Legal", links: legalLinks },
];

export function Footer({ className }: FooterProps): React.ReactElement {
  const year = new Date().getFullYear();

  return (
    <footer
      className={
        "relative isolate border-t border-white/10 bg-ink-950/80 backdrop-blur " +
        (className ?? "")
      }
    >
      {/* Decorative top edge — soft aurora line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand-400/60 to-transparent"
      />

      <Container className="py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand block */}
          <div className="lg:col-span-4">
            <a
              href="#hero"
              className="inline-flex items-center gap-2 text-white"
            >
              <span
                aria-hidden="true"
                className="inline-block h-7 w-7 rounded-md bg-gradient-to-br from-brand-400 via-accent-400 to-aurora-500 shadow-glow"
              />
              <span className="font-mono text-lg font-semibold tracking-tight">
                {brand.name}
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-300">
              {brand.tagline}. Decompose every prompt into atomic, reviewable
              units and ship small, verifiable PRs.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-pill border border-white/10 bg-white/5 text-ink-200 transition-colors hover:border-brand-400/40 hover:bg-white/10 hover:text-white"
                >
                  <span aria-hidden="true" className="text-xs font-semibold">
                    {link.label.charAt(0)}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8"
          >
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-300">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="text-sm text-ink-400 transition-colors hover:text-white"
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

        {/* Bottom row */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-ink-400">
            © {year} {brand.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href={brand.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-pill border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-ink-200 transition-colors hover:border-brand-400/40 hover:bg-white/10 hover:text-white"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-3.5 w-3.5"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.475 2 2 6.475 2 12a9.99 9.99 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.025-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.513 2.338 1.088 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.02 10.02 0 0 0 22 12c0-5.525-4.475-10-10-10Z"
                />
              </svg>
              Star
            </a>
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-ink-400 transition-colors hover:text-white"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 76 65"
                fill="currentColor"
                className="h-3.5 w-3.5"
              >
                <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
              </svg>
              Deployed on Vercel
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;