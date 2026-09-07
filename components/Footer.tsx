// helix: components/Footer.tsx
/**
 * @helix:story USER-63000
 *
 * Footer — the closing site-map block at the bottom of the marketing
 * page. Renders a polished multi-column footer (Product, Resources,
 * Company, Legal) plus social links and copyright.
 *
 * Composition:
 *   • Brand mark + tagline column (left, on the dark canvas).
 *   • Four link columns — Product / Resources / Company / Legal.
 *   • Social row (GitHub, X/Twitter, Discord) with icon glyphs.
 *   • Copyright row at the bottom, sourced from `brand.name` so
 *     marketing/legal can update it from `lib/brand.ts`.
 *
 * Copy is sourced from `@/content/footer.json` so marketing can
 * iterate without touching this component. Pure server component —
 * no client interactivity. Renders a semantic `<footer>` with
 * accessible focus rings.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { brand } from "@/lib/brand";

import footerData from "@/content/footer.json";

export interface FooterProps {
  className?: string;
}

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterColumn {
  heading: string;
  links: ReadonlyArray<FooterLink>;
}

interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "twitter" | "discord";
}

interface FooterContent {
  tagline: string;
  columns: ReadonlyArray<FooterColumn>;
  socials: ReadonlyArray<SocialLink>;
  legalNote: string;
}

const content = footerData as FooterContent;

const SocialIcon = ({
  name,
}: {
  name: SocialLink["icon"];
}): React.ReactElement => {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true as const,
  };
  switch (name) {
    case "github":
      return (
        <svg {...common}>
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.1c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.18.08 1.8 1.21 1.8 1.21 1.04 1.79 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.55-.29-5.23-1.27-5.23-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17.92-.26 1.9-.39 2.88-.39.97 0 1.96.13 2.88.39 2.19-1.48 3.15-1.17 3.15-1.17.63 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.36-5.25 5.65.42.36.79 1.07.79 2.16v3.2c0 .31.21.66.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
        </svg>
      );
    case "twitter":
      return (
        <svg {...common}>
          <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.86l-5.37-7.04L4.6 22H1.34l8.04-9.18L1 2h7.02l4.86 6.43L18.244 2Zm-1.2 18h1.9L7.05 4H5.05l11.99 16Z" />
        </svg>
      );
    case "discord":
      return (
        <svg {...common}>
          <path d="M20.317 4.37a19.79 19.79 0 0 0-4.886-1.515.07.07 0 0 0-.074.035c-.211.375-.444.864-.608 1.249a18.27 18.27 0 0 0-5.498 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.074-.034A19.79 19.79 0 0 0 3.683 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.058a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.009c.12.099.246.198.373.292a.077.077 0 0 1-.006.128 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.029ZM8.02 15.331c-1.182 0-2.157-1.085-2.157-2.42 0-1.333.955-2.418 2.157-2.418 1.21 0 2.176 1.094 2.157 2.418 0 1.335-.955 2.42-2.157 2.42Zm7.975 0c-1.183 0-2.157-1.085-2.157-2.42 0-1.333.955-2.418 2.157-2.418 1.21 0 2.176 1.094 2.157 2.418 0 1.335-.946 2.42-2.157 2.42Z" />
        </svg>
      );
  }
};

export function Footer({ className }: FooterProps): React.ReactElement {
  const year = new Date().getFullYear();

  return (
    <footer
      className={
        "relative isolate border-t border-white/10 bg-ink-950/60 " +
        (className ?? "")
      }
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
      >
        <div className="absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-brand-500/10 blur-3xl" />
        <div className="absolute right-1/4 -bottom-24 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl" />
      </div>

      <Container className="py-14 sm:py-16">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-6">
          <div className="col-span-2 lg:col-span-2">
            <a
              href="#main"
              className="inline-flex items-center gap-2 font-display text-lg font-semibold text-ink-50"
            >
              <span
                aria-hidden="true"
                className="inline-block h-6 w-6 rounded-md bg-gradient-to-br from-brand-400 to-accent-500 shadow-[0_0_18px_-2px_rgba(34,211,238,0.7)]"
              />
              {brand.name}
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-300">
              {content.tagline}
            </p>

            <ul className="mt-6 flex items-center gap-3">
              {content.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-ink-200 transition-colors hover:border-brand-400/40 hover:bg-white/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
                  >
                    <SocialIcon name={social.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {content.columns.map((column) => (
            <div key={column.heading} className="col-span-1 lg:col-span-1">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-300">
                {column.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-ink-200 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
                      {...(link.external
                        ? {
                            target: "_blank",
                            rel: "noopener noreferrer",
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

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {brand.name}. {content.legalNote}
          </p>
          <p className="text-ink-500">
            Built with Next.js · Tailwind v4 · deployed on Vercel.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;