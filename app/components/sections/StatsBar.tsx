import { Container } from "@/components/ui/Container";

type Stat = {
  value: string;
  label: string;
  description: string;
};

const stats: Stat[] = [
  {
    value: "Up to 3x",
    label: "Parallel agents",
    description: "Run multiple language-scoped workers on one task without collisions.",
  },
  {
    value: "Locked",
    label: "Language-aware planning",
    description: "Helix plans in your repo's language before it writes a single file.",
  },
  {
    value: "Protected",
    label: "Write globs",
    description: "Sensitive paths are off-limits unless you explicitly unlock them.",
  },
  {
    value: "Vercel-ready",
    label: "Deploy in one click",
    description: "Output is scaffolded, typed, and wired for a single Vercel deploy.",
  },
];

export function StatsBar() {
  return (
    <section
      aria-labelledby="stats-heading"
      className="relative isolate border-b border-white/5 bg-slate-950/80 py-12 sm:py-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,_rgba(139,92,246,0.08),_rgba(56,189,248,0.08),_rgba(236,72,153,0.08))]"
      />
      <Container>
        <h2 id="stats-heading" className="sr-only">
          Helix at a glance
        </h2>
        <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-violet-400/40 hover:bg-white/[0.06]"
            >
              <dt className="text-xs font-medium uppercase tracking-wider text-slate-400">
                {s.label}
              </dt>
              <dd>
                <p className="mt-2 bg-gradient-to-r from-white via-violet-200 to-sky-200 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {s.description}
                </p>
              </dd>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-violet-500/10 blur-2xl transition group-hover:bg-violet-500/20"
              />
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

export default StatsBar;