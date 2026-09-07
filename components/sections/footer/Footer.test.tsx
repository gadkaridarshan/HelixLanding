import * as React from "react";
import { render, screen, within } from "@testing-library/react";

import { Footer } from "./Footer";

describe("Footer (canonical)", () => {
  it("renders the brand name as the h2 heading with id=footer-heading", () => {
    render(<Footer />);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveAttribute("id", "footer-heading");
    expect(heading.textContent).toBe("Helix");
  });

  it("renders the brand tagline copy", () => {
    render(<Footer />);
    expect(
      screen.getByText(/atomic units/i),
    ).toBeInTheDocument();
  });

  it("renders a copyright row with the current year", () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(`©\\s*${year}`))).toBeInTheDocument();
  });

  it("renders the Product, Resources, and Company columns", () => {
    render(<Footer />);
    expect(
      screen.getByRole("heading", { name: /product/i, level: 3 }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /resources/i, level: 3 }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /company/i, level: 3 }),
    ).toBeInTheDocument();
  });

  it("renders every link label from COLUMNS", () => {
    render(<Footer />);
    const labels = [
      "Features",
      "How it works",
      "Personas",
      "FAQ",
      "Documentation",
      "Changelog",
      "Status",
      "About",
      "Contact",
      "Press kit",
    ];
    for (const label of labels) {
      expect(screen.getByRole("link", { name: label })).toBeInTheDocument();
    }
  });

  it("internal anchors do not get target=_blank or rel", () => {
    render(<Footer />);
    const internalLabels = ["Features", "How it works", "Personas", "FAQ"];
    for (const label of internalLabels) {
      const link = screen.getByRole("link", { name: label });
      expect(link.getAttribute("target")).toBeNull();
      expect(link.getAttribute("rel")).toBeNull();
    }
  });

  it("external links open in a new tab with rel=noopener noreferrer", () => {
    render(<Footer />);
    const externalLabels = [
      "Documentation",
      "Changelog",
      "Status",
      "About",
      "Contact",
      "Press kit",
    ];
    for (const label of externalLabels) {
      const link = screen.getByRole("link", { name: label });
      expect(link.getAttribute("target")).toBe("_blank");
      expect(link.getAttribute("rel")).toMatch(/noopener/);
      expect(link.getAttribute("rel")).toMatch(/noreferrer/);
    }
  });

  it("isExternal detects mailto: links via the heuristic fallback", () => {
    // Contact is mailto:hello@helix.ai — verify the heuristic via the href.
    render(<Footer />);
    const contact = screen.getByRole("link", { name: /contact/i });
    expect(contact.getAttribute("href")).toMatch(/^mailto:/);
  });

  it("renders the bottom 'Built with atomic units' tagline", () => {
    render(<Footer />);
    expect(
      screen.getByText(/Built with atomic units\. Verified per change\./),
    ).toBeInTheDocument();
  });

  it("applies custom className to the footer element", () => {
    render(<Footer className="custom-footer-class" />);
    const footer = screen.getByRole("contentinfo");
    expect(footer.className).toContain("custom-footer-class");
  });

  it("includes base container classes on the footer element", () => {
    render(<Footer />);
    const footer = screen.getByRole("contentinfo");
    expect(footer.className).toContain("border-t");
    expect(footer.className).toContain("bg-white/[0.02]");
    expect(footer.className).toContain("py-12");
  });

  it("exposes a contentinfo landmark with id=footer", () => {
    render(<Footer />);
    const footer = screen.getByRole("contentinfo");
    expect(footer).toHaveAttribute("id", "footer");
    expect(footer).toHaveAttribute("aria-labelledby", "footer-heading");
  });

  it("renders every link inside its column list", () => {
    render(<Footer />);
    const productHeading = screen.getByRole("heading", {
      name: /product/i,
      level: 3,
    });
    const productList = productHeading.closest("div")!;
    expect(within(productList).getAllByRole("link").length).toBeGreaterThan(0);

    const resourcesHeading = screen.getByRole("heading", {
      name: /resources/i,
      level: 3,
    });
    const resourcesList = resourcesHeading.closest("div")!;
    expect(within(resourcesList).getAllByRole("link").length).toBe(3);
  });
});