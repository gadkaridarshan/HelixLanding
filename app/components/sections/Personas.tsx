"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/components/ui/cn";

type Persona = {
  id: string;
  label: string;
  title: string;
  description: string;
  bullets: string[];
  cta: { label: string; href: string };
  accent: string;
};

const personas: Persona[] = [
  {
    id: "indie",
    label: "Indie Developers",
    title: "Ship side projects without burning out",
    description:
      "Helix plans and writes the boilerplate while you stay in flow — so a weekend hack turns into a deployable product, not a graveyard of TODOs.",
    bullets: [
      "Multi-agent scaffolding without the orchestration tax",
      "Token-aware planning that respects your free tier",
      "Ship to Vercel with one click when the work is done",
    ],
    cta: { label: "Start a solo project", href: "#deploy" },
    accent: "from-violet-500/20 to-fuchsia-500/20",
  },
  {
    id: "cto",
    label: "Startup CTOs",
    title: "Move from prototype to production, fast",
    description:
      "Coordinate multiple coding agents across services, keep a clean diff history, and stay in control of architecture decisions without slowing the team down.",
    bullets: [
      "Parallel agents scoped to specific globs",
      "Reviewable, language-locked planning cards",
      "Audit trail of every write for compliance",
    ],
    cta: { label: "Pilot with your team", href: "#deploy" },
    accent: "from-sky-500/20 to-indigo-500/20",
  },
  {
    id: "manager",
    label: "Engineering Managers",
    title: "Forecast delivery without standing in the way",
    description:
      "Give your team an AI pair-programmer that follows the rules of the codebase — and produce the artifacts you need to track scope, velocity, and risk.",
    bullets: [
      "Card-based Kanban visibility on every change",
      "Protected paths and review gates by default",
      "Stack-agnostic — works on your existing repos",
    ],
    cta: { label: "Roll out to a squad", href: "#deploy" },
    accent: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: "enterprise",
    label: "Enterprise Platform Teams",
    title: "Standardize AI coding across the org",
    description:
      "Self-host Helix on your infrastructure, enforce policy on what agents can touch, and integrate with the identity, secrets, and observability stack you already trust.",
    bullets: [
      "Self-hosted runner with private model endpoints",
      "SSO, audit logs, and protected write globs",
      "Open-core — no vendor lock-in",
    ],
    cta: { label: "Talk to platform eng", href: "#deploy" },
    accent: "from-amber-500/20 to-rose-500/20",
  },
  {
    id: "builders",
    label: "AI / Agent Builders",
    title: "Compose agents with predictable contracts",
    description:
      "Treat Helix like a deterministic orchestrator: plan, write, verify, repeat. Plug in your own model, tool, and prompt adapters without rewriting the runtime.",
    bullets: [
      "Pluggable model and tool adapters",
      "Deterministic Kanban + protected write globs",
      "Inspectable traces for every agent step",
    ],
    cta: { label: "Read the architecture", href: "#deploy" },
    accent: "from-pink-500/20 to-purple-500/20",
  },
];

export function Personas() {
  const [activeId, setActiveId] = useState(personas[0].id);
  const active = personas.find((p) => p.id === activeId) ?? personas[0];

  return (
    <section
      id="personas"
      aria-labelledby="personas-heading"
      className="relative isolate overflow-hidden border-y border-white/5 py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(139,92,246,0.12),_transparent_60%)]"
      />
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-violet-300">
            Built for every kind of builder
          </p>
          <h2
            id="personas-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            One orchestrator. Five ways to win with it.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
            Whether you&apos;re shipping a weekend prototype or standardizing AI
            coding across a thousand-engineer org, Helix adapts to how your
            team already works.
          </p>
        </div>

        {/* Tab list */}
        <div
          role="tablist"
          aria-label="User personas"
          className="mt-12 flex flex-wrap justify-center gap-2"
        >
          {personas.map((p) => {
            const selected = p.id === activeId;
            return (
              <button
                key={p.id}
                role="tab"
                aria-selected={selected}
                aria-controls={`persona-panel-${p.id}`}
                id={`persona-tab-${p.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveId(p.id)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition",
                  selected
                    ? "border-violet-400/60 bg-violet-500/15 text-white shadow-[0_0_0_1px_rgba(167,139,250,0.4)_inset]"
                    : "border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:text-white"
                )}
              >
                {p.label}
              </button>
            );
          })}
        </div>

        {/* Active panel */}
        <div
          role="tabpanel"
          id={`persona-panel-${active.id}`}
          aria-labelledby={`persona-tab-${active.id}`}
          className="mx-auto mt-10 max-w-4xl"
        >
          <div
            className={cn(
              "relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur-sm sm:p-10",
              "bg-gradient-to-br",
              active.accent
            )}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 bg-slate-950/60"
            />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-wider text-violet-200">
                {active.label}
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {active.title}
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200">
                {active.description}
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                {active.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-slate-100"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      className="mt-0.5 h-4 w-4 flex-none text-violet-300"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 011.42-1.42L8.5 12.08l6.79-6.79a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a
                  href={active.cta.href}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-violet-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300"
                >
                  {active.cta.label}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Card row fallback / always-visible grid for SEO & non-JS contexts */}
        <div className="sr-only">
          <ul>
            {personas.map((p) => (
              <li key={p.id}>
                <strong>{p.label}:</strong> {p.title} — {p.description}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default Personas;