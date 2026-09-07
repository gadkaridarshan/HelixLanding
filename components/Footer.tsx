// helix: components/Footer.tsx
/**
 * @helix:story USER-812000
 *
 * Footer — site-wide footer with brand wordmark, Product / Resources
 * / Company / Legal link columns, social links, and a "deployed on
 * Vercel" badge.
 *
 * Pure server component. Brand surface (name, canonical URL, GitHub
 * URL) is sourced from `lib/brand.ts` so the same identity shows up in
 * `<title>`, OG cards, and this footer without duplication.
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
    label: "Live orchestrator",
    href: brand.url,
    external: true,
  },
  {
    label: "Documentation",
    href: `${brand.githubUrl}#readme`,
    external: true,
  },
];

const companyLinks: ReadonlyArray<FooterLink> = [
  { label: "About", href: "#hero" },
  { label: "Get started", href: "#get-started" },
  { label: "Roadmap", href: brand.githubUrl, external: true },
];

const legalLinks: ReadonlyArray<FooterLink> = [
  {
    label: "MIT License",
    href: `${brand.githubUrl}/blob/main/LICENSE`,
    external: true,
  },
  {
    label: "Privacy",
    href: `${brand.githubUrl}/blob/main/docs/PRIVACY.md`,
    external: true,
  },
];

const socialLinks: ReadonlyArray<SocialLink> = [
  { label: "GitHub", href: brand.githubUrl },
];

const columns: ReadonlyArray<FooterColumn> = [
  { title: "Product", links: productLinks },
  { title: "Resources", links: resourcesLinks },
  { title: "Company", links: companyLinks },
  { title: "Legal", links: legalLinks },
];

function VercelBadge(): React.ReactElement {
  return (
    <a
      href="https://vercel.com"
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Deployed on Vercel"
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300 transition-colors hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-3.5 w-3.5 text-white"
      >
        <path d="M12 1L24 22H0L12 1Z" />
      </svg>
      <span className="font-medium tracking-tight">Deployed on Vercel</span>
    </a>
  );
}

function SocialIcon({
  label,
  href,
}: {
  label: string;
  href: string;
}): React.ReactElement {
  if (label === "GitHub") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Helix on GitHub"
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition-colors hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-4 w-4"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      </a>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition-colors hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
    >
      <span className="text-xs font-medium">{label.charAt(0)}</span>
    </a>
  );
}

export function Footer({ className }: FooterProps): React.ReactElement {
  const year = new Date().getFullYear();

  return (
    <footer
      className={
        "relative isolate border-t border-white/10 bg-slate-950/60 " +
        (className ?? "")
      }
    >
      <Container className="py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_repeat(4,minmax(0,1fr))] lg:gap-12">
          {/* Brand column */}
          <div className="max-w-sm">
            <a
              href="#hero"
              className="inline-flex items-center gap-2 text-white"
              aria-label={`${brand.name} home`}
            >
              <span
                aria-hidden="true"
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 text-slate-950 shadow-[0_8px_24px_-8px_rgba(34,211,238,0.6)]"
              >
                <span className="font-mono text-sm font-bold">H</span>
              </span>
              <span className="text-base font-semibold tracking-tight">
                {brand.name}
              </span>
            </a>

            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {brand.shortDescription}
            </p>

            <div className="mt-6">
              <VercelBadge />
            </div>

            <div className="mt-6 flex items-center gap-2">
              {socialLinks.map((s) => (
                <SocialIcon key={s.label} label={s.label} href={s.href} />
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                {col.title}
              </h3>
              <ul role="list" className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.external
                        ? {
                            target: "_blank",
                            rel: "noreferrer noopener",
                          }
                        : {})}
                      className="text-sm text-slate-300 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-slate-500">
            © {year} {brand.name}. Licensed under the MIT License.
          </p>
          <p className="text-xs text-slate-500">
            Built with Next.js · Atomic work-breakdown for AI coding agents.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;