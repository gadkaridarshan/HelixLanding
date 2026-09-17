import { render, screen } from "@testing-library/react";
import HeroSection from "./HeroSection";

describe("HeroSection", () => {
  test("renders without crashing", () => {
    render(<HeroSection />);
    expect(
      screen.getByText(/AI Orchestration that Turns Complexity into Clarity/i),
    ).toBeInTheDocument();
  });
});
