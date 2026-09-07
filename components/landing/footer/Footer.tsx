// helix: components/landing/footer/Footer.tsx
/**
 * @helix:story USER-956000
 *
 * Site footer — brand mark, navigation links, GitHub star CTA, and
 * Vercel deploy reference.
 */
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import ctaData from "@/content/cta.json";

interface NavLink {
  label: string;
  href: string;
}

interface NavGroup {
  title: string;
  links: NavLink[];
}

const NAV_GROUPS: NavGroup[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "How it works", href: "/#how-it-works" },
      { label: "Personas", href: "/#personas" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Project",
    links: [
      { label: "GitHub", href: "https://github.com/gadkaridarshan/Helix" },
      { label: "Roadmap", href: "https://github.com/gadkaridarshan/Helix#roadmap" },
      { label: "Changelog", href: "https://github.com/gadkaridarshan/Helix/releases" },
      { label: "License (MIT)", href: "https://github.com/gadkaridarshan/Helix/blob/main/LICENSE" },
    ],
  },
  {
    title: "Deploy",
    links: [
      { label: "Deploy to Vercel", href: "https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fgadkaridarshan%2FHelix&project-name=helix-landing" },
      { label: "Self-host guide", href: "https://github.com/gadkaridarshan/Helix#self-host" },
      { label: "Environment variables", href: "https://github.com/gadkaridarshan/Helix#configuration" },
    ],
  },
];

const SOCIAL: NavLink[] = [
  { label: "GitHub", href: "https://github.com/gadkaridarshan/Helix" },
];

export function Footer(): React.ReactElement {
  const starCta = (ctaData as { secondaryCta?: { label: string; href: string } }).secondaryCta ?? {
    label: "Star on GitHub",
    href: "https://github.com/gadkaridarshan/Helix",
  };

  return (
    <footer
      aria-labelledby="footer-heading"
      className="relative isolate overflow-hidden border-t border-white/10 bg-slate-950/80 py-16 sm:py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(56,189,248,0.08),_transparent_60%)]"
      />
      <Container>
        <h2 id="footer-heading" className="sr-only">
          Site footer
        </h2>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand + CTA */}
          <div className="lg:col-span-5">
            <Link
              href="/"
              aria-label="Helix home"
              className="inline-flex items-center gap-2 text-lg font-semibold text-white"
            >
              <span
                aria-hidden="true"
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-violet-500 text-slate-950 shadow-md shadow-sky-500/30"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                  <path
                    d="M4 7l8-4 8 4-8 4-8-4zM4 12l8 4 8-4M4 17l8 4 8-4"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>Helix</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Atomic work-breakdown for AI-assisted engineering. Plan, write,
              and review one card at a time — on your repo, on your rules.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={starCta.href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-white/30 hover:bg-white/10"
              >
                <svg viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
                </svg>
                <span>{starCta.label}</span>
              </a>
              <Link
                href="/#get-started"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-violet-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-md shadow-sky-500/20 transition-all hover:from-sky-300 hover:to-violet-400"
              >
                Get started
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-3.5 w-3.5">
                  <path
                    d="M5 10h10M11 5l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Nav groups */}
          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7"
          >
            {NAV_GROUPS.map((group) => (
              <div key={group.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => {
                    const external = /^https?:\/\//.test(link.href);
                    return (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          {...(external
                            ? { target: "_blank", rel: "noreferrer noopener" }
                            : {})}
                          className="text-sm text-slate-300 transition-colors hover:text-white"
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Helix. MIT licensed.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
            <span>Deploy-ready on</span>
            <a
              href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fgadkaridarshan%2FHelix&project-name=helix-landing"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-200 transition-colors hover:border-white/25 hover:bg-white/10"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                <path d="M12 2 2 19.5h20L12 2Zm0 4.6 6.4 11.1H5.6L12 6.6Z" />
              </svg>
              <span>Vercel</span>
            </a>
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-white"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;