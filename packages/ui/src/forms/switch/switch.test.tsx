import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Switch } from "./switch";

describe("Switch", () => {
  it("renders a switch with an accessible label", () => {
    render(<Switch label="Back in stock alerts" />);
    expect(screen.getByRole("switch", { name: "Back in stock alerts" })).toBeInTheDocument();
  });
});