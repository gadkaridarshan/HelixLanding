import Link from "next/link";
import { Container } from "@/components/ui/Container";

/**
 * Footer — minimal shell only. No copy, columns, or social proof yet;
 * those will be added by later cards.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-ink-950">
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />
      <Container className="flex flex-col items-start justify-between gap-4 py-10 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-brand-500 to-accent-500">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4 text-white"
              aria-hidden
            >
              <path
                d="M5 4c4 0 4 4 7 4s3-4 7-4M5 20c4 0 4-4 7-4s3 4 7 4M5 4v16M19 4v16"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="text-sm font-medium text-ink-200">Helix</span>
        </div>

        <p className="text-xs text-ink-400">
          © {year} Helix. Built with care for production teams.
        </p>

        <div className="flex items-center gap-5 text-sm">
          <Link
            href="https://github.com/gadkaridarshan/Helix"
            className="text-ink-400 transition-colors hover:text-ink-100"
          >
            GitHub
          </Link>
          <Link
            href="#deploy"
            className="text-ink-400 transition-colors hover:text-ink-100"
          >
            Deploy
          </Link>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;