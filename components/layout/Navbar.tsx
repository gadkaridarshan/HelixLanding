"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

/**
 * Navbar — transparent at top of page, transitions to a solid, blurred
 * surface after the user scrolls past 16px. Pure UI shell: no nav copy
 * beyond the brand mark and a single primary CTA, per card scope.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/5 bg-ink-950/70 backdrop-blur-xl shadow-card"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label="Helix home"
        >
          <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 shadow-glow-brand">
            <span className="absolute inset-0 rounded-lg bg-aurora-gradient opacity-60 mix-blend-overlay" />
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="relative h-5 w-5 text-white"
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
          <span className="text-base font-semibold tracking-tight text-ink-50">
            Helix
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {/* Nav items intentionally omitted per card scope */}
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink
            href="#deploy"
            variant="primary"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Deploy
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}

export default Navbar;