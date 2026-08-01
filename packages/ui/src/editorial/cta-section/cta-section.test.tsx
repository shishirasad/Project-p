import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "../../primitives/button";
import { CTASection } from "./cta-section";

describe("CTASection", () => {
  it("renders CTA copy and action slots", () => {
    render(<CTASection title="Enter the house" actions={<Button>Explore</Button>} />);
    expect(screen.getByRole("heading", { level: 2, name: "Enter the house" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Explore" })).toBeInTheDocument();
  });
});