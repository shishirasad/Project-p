import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ResponsiveSlot } from "./responsive-slot";

describe("ResponsiveSlot", () => {
  it("applies responsive visibility classes", () => {
    render(<ResponsiveSlot show="desktop">Desktop content</ResponsiveSlot>);
    expect(screen.getByText("Desktop content")).toHaveClass("hidden", "lg:block");
  });
});