// helix: components/Footer.tsx
/**
 * @helix:story USER-308000
 *
 * Footer — site chrome with link columns, brand mark, and a clearly-labelled
 * reference-site pointer.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { brand } from "@/lib/brand";

export interface FooterProps {
  className?: string;
}

const linkGroups: { title: string; links: { label: string; href: string }[] }[] =
  [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "How it works", href: "#how-it-works" },
        { label: "Personas", href: "#personas" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    {
      title: "Project",
      links: [
        { label: "GitHub", href: brand.githubUrl },
        { label: "Live site", href: brand.url },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "MIT license", href: `${brand.githubUrl}/blob/main/LICENSE` },
        { label: "Security", href: `${brand.githubUrl}/security` },
      ],
    },
  ];

export function Footer({ className }: FooterProps): React.ReactElement {
  const year = new Date().getFullYear();
  return (
    <footer
      className={
        "relative isolate border-t border-white/10 bg-slate-950 py-16 " +
        (className ?? "")
      }
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href={brand.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-lg font-semibold text-white"
            >
              <span
                aria-hidden="true"
                className="inline-block h-6 w-6 rounded-md bg-gradient-to-br from-cyan-400 via-violet-400 to-fuchsia-400 shadow-[0_0_18px_rgba(34,211,238,0.45)]"
              />
              {brand.name}
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              {brand.description}
            </p>

            {/* Reference-site pointer */}
            <p className="mt-6 max-w-sm rounded-xl border border-white/10 bg-white/[0.03] p-4 text-xs leading-relaxed text-slate-400">
              <span className="font-semibold text-slate-300">
                Reference site
              </span>{" "}
              —{" "}
              <a
                href={brand.referenceUrl}
                target="_blank"
                rel="noreferrer"
                className="text-cyan-300 underline-offset-2 hover:underline"
              >
                helix-ai-orchestrator.vercel.app
              </a>{" "}
              is a visual / brand reference only and is{" "}
              <span className="font-semibold text-slate-300">not</span> the
              live landing page for this product. The live page for this
              product is deployed at{" "}
              <a
                href={brand.url}
                target="_blank"
                rel="noreferrer"
                className="text-cyan-300 underline-offset-2 hover:underline"
              >
                {brand.url}
              </a>
              .
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-3">
            {linkGroups.map((g) => (
              <div key={g.title}>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-300">
                  {g.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {g.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm text-slate-400 transition hover:text-white"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-slate-500">
            © {year} {brand.name}. MIT licensed.
          </p>
          <p className="text-xs text-slate-500">
            Built with Next.js · Tailwind · TypeScript.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;