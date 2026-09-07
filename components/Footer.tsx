// helix: components/Footer.tsx
/**
 * @helix:story USER-73000
 * @helix:story USER-94000
 *
 * Footer — canonical landing-page site footer.
 *
 *   • Brand mark + name + tagline.
 *   • Link columns: Product / Project / Legal.
 *   • Social links + GitHub star CTA.
 *   • Copyright with dynamic year.
 *
 * Pure server component. All identity (URLs, GitHub, social) is
 * sourced from `@/lib/brand` so the surface stays in sync with the
 * metadata + OG cards rendered by the root layout.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
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

const productLinks: ReadonlyArray<FooterLink> = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Personas", href: "#personas" },
  { label: "Use cases", href: "#use-cases" },
  { label: "FAQ", href: "#faq" },
];

const projectLinks: ReadonlyArray<FooterLink> = [
  { label: "GitHub", href: brand.githubUrl, external: true },
  { label: "Live site", href: brand.url, external: true },
  { label: "Roadmap", href: `${brand.githubUrl}#roadmap`, external: true },
  { label: "Changelog", href: `${brand.githubUrl}#changelog`, external: true },
];

const legalLinks: ReadonlyArray<FooterLink> = [
  { label: "License", href: `${brand.githubUrl}#license`, external: true },
  { label: "Privacy", href: "#privacy" },
  { label: "Terms", href: "#terms" },
];

const columns: ReadonlyArray<FooterColumn> = [
  { title: "Product", links: productLinks },
  { title: "Project", links: projectLinks },
  { title: "Legal", links: legalLinks },
];

const socialLinks: ReadonlyArray<FooterLink> = [
  {
    label: "GitHub",
    href: brand.githubUrl,
    external: true,
  },
  {
    label: "Twitter",
    href: brand.twitterUrl,
    external: true,
  },
  {
    label: "LinkedIn",
    href: brand.linkedInUrl,
    external: true,
  },
];

export function Footer({ className }: FooterProps): React.ReactElement {
  const year = new Date().getFullYear();

  return (
    <footer
      className={
        "relative border-t border-white/5 bg-[#04050a] py-14 text-sm text-white/60 " +
        (className ?? "")
      }
    >
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <a
              href="#hero"
              className="flex items-center gap-2 text-sm font-semibold tracking-tight text-white"
            >
              <span
                aria-hidden="true"
                className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-cyan-400 to-violet-500 text-xs font-bold text-black"
              >
                H
              </span>
              <span>{brand.name}</span>
            </a>
            <p className="mt-4 max-w-sm text-pretty leading-relaxed text-white/60">
              {brand.description}
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.18em] text-white/40">
              {brand.tagline}
            </p>

            <a
              href={brand.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-white/80 transition-colors hover:bg-white/[0.08]"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.16c-3.2.7-3.87-1.36-3.87-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.69.08-.69 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.73-1.53-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.05 0 0 .96-.31 3.15 1.18.91-.25 1.89-.38 2.86-.39.97.01 1.95.14 2.86.39 2.18-1.49 3.14-1.18 3.14-1.18.63 1.58.24 2.76.12 3.05.73.81 1.18 1.84 1.18 3.1 0 4.45-2.69 5.42-5.25 5.7.41.36.78 1.06.78 2.14v3.18c0 .31.21.68.8.56 4.57-1.52 7.85-5.83 7.85-10.91C23.5 5.65 18.35.5 12 .5z" />
              </svg>
              Star on GitHub
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                  {col.title}
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  {col.links.map((link) => {
                    const isExternal = link.external === true;
                    return (
                      <li key={`${col.title}-${link.label}`}>
                        <a
                          href={link.href}
                          className="text-sm text-white/70 transition-colors hover:text-white"
                          {...(isExternal
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
        </div>

        <div className="mt-12 flex flex-col-reverse items-start justify-between gap-6 border-t border-white/5 pt-8 md:flex-row md:items-center">
          <p className="text-xs text-white/45">
            © {year} {brand.name}. All rights reserved.
          </p>
          <ul role="list" className="flex items-center gap-5 text-xs">
            {socialLinks.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-white/55 transition-colors hover:text-white"
                >
                  {s.label}
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