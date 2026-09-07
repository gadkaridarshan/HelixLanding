// helix: app/components/sections/Personas.tsx
"use client";

import { useState, type ReactElement } from "react";
import { Container } from "../ui/Container";
import { Section } from "../../../components/ui/Section";
import { Button } from "../../../components/ui/Button";
import { cn } from "../../../components/ui/cn";

/** @helix:story USER-212000 */

interface Persona {
  id: string;
  label: string;
  tagline: string;
  description: string;
  bullets: string[];
  cta: string;
  href: string;
  icon: ReactElement;
}

const personas: Persona[] = [
  {
    id: "indie",
    label: "Indie Developers",
    tagline: "Ship side projects at the pace of your ideas",
    description:
      "Move from a vague notion to a deployed product without babysitting an agent. Helix plans the work, writes the code, and stops where you'd stop.",
    bullets: [
      "Idea-to-PR without leaving your editor",
      "Bounded writes — your files, your rules",
      "One command from prompt to preview",
    ],
    cta: "Start shipping",
    href: "/docs/quickstart",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={1.6}>
        <path d="M3 7l9-4 9 4-9 4-9-4z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 12l9 4 9-4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 17l9 4 9-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "cto",
    label: "Startup CTOs",
    tagline: "Validate architecture before you burn runway",
    description:
      "Helix speaks your stack — TypeScript, Python, Go, Rust — and locks the agent to your repo's language and conventions so prototypes match production.",
    bullets: [
      "Language-locked planning and writes",
      "Protected globs guard migrations",
      "Diff review before any commit",
    ],
    cta: "Align the team",
    href: "/docs/stacks",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={1.6}>
        <path d="M4 21V8l8-5 8 5v13" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 21v-7h6v7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "builder",
    label: "AI / Agent Builders",
    tagline: "Wire Helix into your agent stack as a primitive",
    description:
      "Expose plan, write, and review as first-class tools. Helix becomes the deterministic code layer under your agent loops, your MCP server, or your custom runtime.",
    bullets: [
      "Plan / write / review as composable tools",
      "MCP-friendly interface contract",
      "Stream diffs into your agent trace",
    ],
    cta: "Integrate Helix",
    href: "/docs/mcp",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={1.6}>
        <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "manager",
    label: "Engineering Managers",
    tagline: "Multiply output without multiplying headcount",
    description:
      "Dispatch parallel agents across well-scoped tasks while keeping a single reviewable diff stream. Ship more, review once, sleep normally.",
    bullets: [
      "Up to 3x parallel agents per workspace",
      "One diff to review, not ten",
      "Audit-friendly write logs",
    ],
    cta: "Scale the team",
    href: "/docs/teams",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={1.6}>
        <circle cx="9" cy="8" r="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="17" cy="9" r="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 20c0-3 2.5-5 6-5s6 2 6 5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.5 19.5c0.3-2 2-3.5 4-3.5s3.5 1.5 3.5 3.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "enterprise",
    label: "Enterprise Platform Teams",
    tagline: "Governance-friendly agents behind your firewall",
    description:
      "Self-host Helix against your own model keys, restrict it to protected globs, and wire approvals into the diff. The agent accelerates, your policies hold the line.",
    bullets: [
      "Self-hosted runtime, BYO model keys",
      "Glob allow-lists and write approvals",
      "Air-gapped, SOC2-friendly footprint",
    ],
    cta: "Talk to platform",
    href: "/enterprise",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={1.6}>
        <rect x="3" y="4" width="18" height="6" rx="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="3" y="14" width="18" height="6" rx="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 7h0.01M7 17h0.01M11 7h6M11 17h6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function Personas(): ReactElement {
  const [activeId, setActiveId] = useState<string>(personas[0].id);
  const active = personas.find((p) => p.id === activeId) ?? personas[0];

  return (
    <Section
      id="personas"
      eyebrow="Built for every kind of builder"
      description="From weekend prototypes to platform engineering — Helix fits the seat you sit in."
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[18rem_1fr] lg:gap-12">
          <div
            role="tablist"
            aria-label="Persona"
            aria-orientation="vertical"
            className="flex flex-row gap-2 overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02] p-2 lg:flex-col lg:overflow-visible"
          >
            {personas.map((p) => {
              const isActive = p.id === active.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  role="tab"
                  id={`persona-tab-${p.id}`}
                  aria-selected={isActive}
                  aria-controls={`persona-panel-${p.id}`}
                  onClick={() => setActiveId(p.id)}
                  className={cn(
                    "flex shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-left text-sm transition-all duration-200",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60",
                    isActive
                      ? "bg-white/10 text-white shadow-inner shadow-violet-500/10"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  )}
                >
                  <span
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border",
                      isActive
                        ? "border-violet-400/40 bg-violet-500/10 text-violet-200"
                        : "border-white/10 bg-white/5 text-slate-300"
                    )}
                  >
                    {p.icon}
                  </span>
                  <span className="font-medium">{p.label}</span>
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id={`persona-panel-${active.id}`}
            aria-labelledby={`persona-tab-${active.id}`}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent p-8 sm:p-10"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" />

            <div className="relative">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/40 bg-violet-500/10 text-violet-200">
                  {active.icon}
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-violet-300">
                    {active.label}
                  </p>
                  <p className="mt-0.5 text-sm text-slate-400">{active.tagline}</p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                {active.description}
              </h3>

              <ul className="mt-6 space-y-3">
                {active.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-sm text-slate-200 sm:text-base"
                  >
                    <span
                      aria-hidden
                      className="mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-violet-400/50 bg-violet-500/15"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-2.5 w-2.5 text-violet-300"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          d="M5 12l5 5L20 7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href={active.href} className="inline-block">
                  <Button variant="primary" size="md">
                    {active.cta}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden
                    >
                      <path
                        d="M5 12h14M13 5l7 7-7 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Button>
                </a>
                <a
                  href="https://github.com/gadkaridarshan/Helix"
                  className="inline-block"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Button variant="ghost" size="md">
                    View on GitHub
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}