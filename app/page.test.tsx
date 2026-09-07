import * as React from "react";
import { render, screen } from "@testing-library/react";

import HomePage from "./page";

describe("HomePage", () => {
  it("renders a main element", () => {
    render(<HomePage />);
    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  it("mounts the Footer via the canonical section path", () => {
    render(<HomePage />);
    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveAttribute("id", "footer");
  });

  it("renders the brand wordmark inside the footer", () => {
    render(<HomePage />);
    expect(
      screen.getByRole("heading", { level: 2, name: /helix/i }),
    ).toBeInTheDocument();
  });

  it("renders the copyright year inside the main container", () => {
    render(<HomePage />);
    const main = screen.getByRole("main");
    const year = new Date().getFullYear().toString();
    expect(main.textContent).toMatch(new RegExp(year));
  });
});