// helix: components/sections/Footer.tsx
/**
 * @helix:story USER-63000
 *
 * Footer — site-wide footer with brand wordmark, Product / Resources
 * / Company / Legal link columns, social links, copyright, and a
 * "Built with Helix" wordmark.
 *
 * Pure server component. Brand surface (name, canonical URL,
 * GitHub URL) is sourced from `lib/brand.ts` so the same identity
 * shows up in `<title>`, OG cards, and this footer without
 * duplication.
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
    label: "Live site",
    href: brand.url,
    external: true,
  },
  { label: "Reference demo", href: brand.referenceUrl, external: true },
];

const companyLinks: ReadonlyArray<FooterLink> = [
  { label: "About", href: "#hero" },
  { label: "Roadmap", href: brand.githubUrl, external: true },
  { label: "Contact", href: `mailto:${brand.contactEmail}` },
];

const legalLinks: ReadonlyArray<FooterLink> = [
  { label: "MIT license", href: `${brand.githubUrl}/blob/main/LICENSE`, external: true },
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
];

const columns: ReadonlyArray<FooterColumn> = [
  { title: "Product", links: productLinks },
  { title: "Resources", links: resourcesLinks },
  { title: "Company", links: companyLinks },
  { title: "Legal", links: legalLinks },
];

const socialLinks: ReadonlyArray<SocialLink> = [
  { label: "GitHub", href: brand.githubUrl },
  {
    label: "Live site",
    href: brand.url,
  },
];

export function Footer({ className }: FooterProps): React.ReactElement {
  const year = new Date().getFullYear();

  return (
    <footer
      className={
        "relative isolate border-t border-white/10 bg-slate-950/80 backdrop-blur " +
        (className ?? "")
      }
    >
      <Container size="lg" as="div" className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          {/* Brand column */}
          <div className="space-y-6">
            <a
              href="#hero"
              className="inline-flex items-center gap-2 text-lg font-semibold text-ink-50"
            >
              <span
                aria-hidden="true"
                className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-400 via-accent-500 to-aurora-500 text-ink-950 shadow-glow"
              >
                <span className="font-mono text-base font-bold">H</span>
              </span>
              <span>{brand.name}</span>
            </a>
            <p className="max-w-sm text-sm leading-6 text-ink-400">
              {brand.shortDescription}
            </p>

            <ul className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="inline-flex h-10 items-center rounded-full border border-white/10 bg-white/5 px-4 text-sm text-ink-200 transition hover:border-white/20 hover:bg-white/10 hover:text-ink-50"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((column) => (
              <div key={column.title} className="space-y-4">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-ink-200 transition hover:text-brand-300"
                        {...(link.external
                          ? { target: "_blank", rel: "noreferrer noopener" }
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

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-sm text-ink-400 sm:flex-row sm:items-center">
          <p>
            © {year} {brand.name}. All rights reserved.
          </p>
          <p className="inline-flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_2px_rgba(52,211,153,0.55)]"
            />
            Deployed on Vercel
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;