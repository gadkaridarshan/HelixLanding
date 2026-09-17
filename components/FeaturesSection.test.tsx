import { render, screen } from "@testing-library/react";
import FeaturesSection from "./FeaturesSection";

describe("FeaturesSection", () => {
  test("renders without crashing", () => {
    render(<FeaturesSection />);
    expect(screen.getByText(/Powerful Features/i)).toBeInTheDocument();
  });
});
