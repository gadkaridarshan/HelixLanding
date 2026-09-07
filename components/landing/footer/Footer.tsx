// helix: components/landing/footer/Footer.tsx
/**
 * @helix:story USER-956000
 *
 * Footer — brand mark, navigation columns, GitHub star CTA, and a
 * Vercel deploy reference. Server-rendered, no interactivity.
 */
import type { ReactElement } from "react";
import { Container } from "@/app/components/ui/Container";

interface FooterColumn {
  heading: string;
  links: { label: string; href: string; external?: boolean }[];
}

const columns: FooterColumn[] = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#how-it-works" },
      { label: "For your role", href: "#personas" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    heading: "Resources",
    links: [
      {
        label: "GitHub repo",
        href: "https://github.com/gadkaridarshan/Helix",
        external: true,
      },
      { label: "Documentation", href: "#get-started" },
      { label: "Changelog", href: "https://github.com/gadkaridarshan/Helix/releases", external: true },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Contact", href: "mailto:hello@helix-ai.dev", external: true },
      { label: "Privacy", href: "#" },
    ],
  },
];

export function Footer(): ReactElement {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative border-t border-white/10 bg-slate-950"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Site footer
      </h2>

      <div
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
        aria-hidden="true"
      />

      <Container className="py-14">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-white"
              aria-label="Helix home"
            >
              <svg
                viewBox="0 0 32 32"
                aria-hidden="true"
                className="h-7 w-7 text-cyan-400"
              >
                <defs>
                  <linearGradient id="ft-mark" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                </defs>
                <circle cx="16" cy="16" r="3.2" fill="url(#ft-mark)" />
                <ellipse
                  cx="16"
                  cy="16"
                  rx="13"
                  ry="5"
                  fill="none"
                  stroke="url(#ft-mark)"
                  strokeWidth="1.5"
                  opacity="0.7"
                />
                <ellipse
                  cx="16"
                  cy="16"
                  rx="13"
                  ry="5"
                  fill="none"
                  stroke="url(#ft-mark)"
                  strokeWidth="1.5"
                  opacity="0.5"
                  transform="rotate(60 16 16)"
                />
                <ellipse
                  cx="16"
                  cy="16"
                  rx="13"
                  ry="5"
                  fill="none"
                  stroke="url(#ft-mark)"
                  strokeWidth="1.5"
                  opacity="0.5"
                  transform="rotate(-60 16 16)"
                />
              </svg>
              <span className="text-lg font-bold tracking-tight">Helix</span>
            </a>

            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              The atomic work-breakdown orchestrator. Plan, write, and ship
              code in focused, reviewable steps.
            </p>

            <a
              href="https://github.com/gadkaridarshan/Helix"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 transition-colors"
            >
              <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4">
                <path
                  fill="currentColor"
                  d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                />
              </svg>
              Star on GitHub
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-3">
            {columns.map((col) => (
              <div key={col.heading}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                  {col.heading}
                </h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...(link.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="text-sm text-slate-400 hover:text-cyan-300 focus-visible:text-cyan-300 focus-visible:outline-none transition-colors"
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

        <div className="mt-12 flex flex-col-reverse items-start gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            © {year} Helix. MIT licensed. Built for teams that still review
            their pull requests.
          </p>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>Deployed on</span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-white">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5">
                <path
                  fill="currentColor"
                  d="M24 22.525H0l12-21.05 12 21.05ZM4.26 20.61h15.48L12 6.36 4.26 20.61Z"
                />
              </svg>
              <span className="font-semibold tracking-wide">Vercel</span>
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;