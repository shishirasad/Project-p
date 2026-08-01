import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Section } from "./section";

describe("Section", () => {
  it("renders as a section", () => {
    render(<Section>Quiet luxury</Section>);
    expect(screen.getByText("Quiet luxury")).toBeInTheDocument();
  });
});
