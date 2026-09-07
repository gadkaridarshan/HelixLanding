// helix: components/sections/personas/Personas.tsx
/**
 * @helix:story USER-742000
 *
 * Personas — role-targeted value props for six user types:
 *   • Developer
 *   • Engineering Manager
 *   • Product Manager
 *   • AI/ML Engineer
 *   • Startup Founder
 *   • Enterprise Architect
 *
 * Pure server component. The tabs are interactive on the client via a
 * small dedicated client island (`PersonasTabs`), which keeps this file
 * a server component while still letting visitors switch between roles.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { PersonasTabs } from "@/components/sections/personas/PersonasTabs";
import personas from "@/content/personas.json";

interface PersonasContent {
  body: string;
  bullets: ReadonlyArray<string>;
}

interface PersonasRole {
  id: string;
  label: string;
  valueProp: string;
  icon:
    | "Code2"
    | "Users"
    | "Briefcase"
    | "Cpu"
    | "Rocket"
    | "Building2";
  content: PersonasContent;
}

const roles = (personas as { roles: PersonasRole[] }).roles;

function RoleIcon({
  name,
}: {
  name: PersonasRole["icon"];
}): React.ReactElement {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "Code2":
      return (
        <svg {...common}>
          <path d="M9 8l-4 4 4 4" />
          <path d="M15 8l4 4-4 4" />
        </svg>
      );
    case "Users":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" />
          <path d="M3 20c0-3 2.7-5 6-5s6 2 6 5" />
          <circle cx="17" cy="9" r="2.5" />
          <path d="M15 20c.3-2 1.7-3.5 4-3.5s3.5 1.5 3.5 3.5" />
        </svg>
      );
    case "Briefcase":
      return (
        <svg {...common}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
          <path d="M3 12h18" />
        </svg>
      );
    case "Cpu":
      return (
        <svg {...common}>
          <rect x="6" y="6" width="12" height="12" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
        </svg>
      );
    case "Rocket":
      return (
        <svg {...common}>
          <path d="M14 4c4 0 6 2 6 6-2 0-4 1-5.5 2.5L11 16l-3-3 3.5-3.5C13 8 14 6 14 4z" />
          <path d="M8 16l-3 1 1-3" />
          <path d="M5 19