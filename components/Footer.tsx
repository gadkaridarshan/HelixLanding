// helix: components/Footer.tsx
/**
 * @helix:story USER-23000
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
];

const legalLinks: ReadonlyArray<FooterLink> = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
];

const columns: ReadonlyArray<FooterColumn> = [
  { title: "Product", links: productLinks },
  { title: "Resources", links: resourcesLinks },
  { title: "Legal", links: legalLinks },
];

const socialLinks: ReadonlyArray<SocialLink> = [
  { label: "GitHub", href: brand.githubUrl },
];

export function Footer({ className }: FooterProps): React.ReactElement {
  const hostname = (() => {
    try {
      return new URL(brand.url).hostname;
    } catch {
      return brand.url;
    }
  })();

  const year = new Date().getFullYear();

  return (
    <footer
      className={
        "relative isolate border-t border-white/10 bg-slate-950 py-12 text-slate-300 sm:py-16 " +
        (className ?? "")
      }
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.5fr_2fr]">
          <div>
            <a
              href="#hero"
              className="inline-flex items-center gap-2 font-mono text-lg font-semibold text-white"
            >
              <span
                aria-hidden="true"
                className="inline-block h-5 w-5 rounded-md bg-gradient-to-br from-cyan-400 to-violet-500"
              />
              {brand.name}
            </a>
            <p className="mt-3 max-w-sm text-sm text-slate-400">
              {brand.shortDescription}
            </p>
            <p className="mt-4 text-xs text-slate-500">
              Live site:{" "}
              <a
                href={brand.url}
                className="text-slate-300 underline-offset-4 hover:underline"
              >
                {hostname}
              </a>
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
                  {column.title}
                </h3>
                <ul className="mt-3 space-y-2 text-sm">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-slate-400 underline-offset-4 hover:text-white hover:underline"
                        {...(link.external
                          ? { target: "_blank", rel: "noreferrer" }
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

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-slate-500">
            © {year} {brand.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-slate-400 underline-offset-4 hover:text-white hover:underline"
              >
                {link.label}
              </a>
            ))}
            <span
              aria-hidden="true"
              className="h-4 w-px bg-white/10"
            />
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300">
              <span
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400"
              />
              Deployed on Vercel
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;