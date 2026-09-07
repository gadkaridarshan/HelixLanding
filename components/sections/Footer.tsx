// helix: components/sections/Footer.tsx
/**
 * @helix:story USER-303000
 *
 * Footer — global site footer with brand, nav, and social links.
 */
import * as React from "react";

import { brand } from "@/lib/brand";

export interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps): React.ReactElement {
  return (
    <footer
      className={
        "relative border-t border-white/5 bg-[#04050a] py-12 text-sm text-white/60 " +
        (className ?? "")
      }
    >
      <div className="container-x">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-cyan-400 to-violet-500 text-xs font-bold text-black"
              >
                H
              </span>
              <span className="text-base font-semibold tracking-tight text-white">
                {brand.name}
              </span>
            </div>
            <p className="mt-3 text-pretty leading-relaxed text-white/60">
              {brand.description}
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <FooterColumn
              title="Product"
              links={[
                { href: "#features", label: "Features" },
                { href: "#how-it-works", label: "How it works" },
                { href: "#personas", label: "Personas" },
                { href: "#faq", label: "FAQ" },
              ]}
            />
            <FooterColumn
              title="Project"
              links={[
                { href: brand.githubUrl, label: "GitHub", external: true },
                { href: brand.url, label: "Live site", external: true },
              ]}
            />
            <FooterColumn
              title="Connect"
              links={[
                { href: brand.twitterUrl, label: "Twitter", external: true },
                { href: brand.linkedInUrl, label: "LinkedIn", external: true },
              ]}
            />
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {brand.name}. Open source under MIT.
          </p>
          <p>
            Built with Next.js · Deployed on Vercel.
          </p>
        </div>
      </div>
    </footer>
  );
}

interface FooterLink {
  href: string;
  label: string;
  external?: boolean;
}

interface FooterColumnProps {
  title: string;
  links: ReadonlyArray<FooterLink>;
}

function FooterColumn({ title, links }: FooterColumnProps): React.ReactElement {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
        {title}
      </h3>
      <ul role="list" className="mt-3 flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;