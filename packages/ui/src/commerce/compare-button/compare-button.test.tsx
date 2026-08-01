import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CompareButton } from "./compare-button";

describe("CompareButton", () => {
  it("exposes selected state through aria-pressed", () => {
    render(<CompareButton ariaLabel="Compare" isSelected />);
    expect(screen.getByRole("button", { name: "Compare" })).toHaveAttribute("aria-pressed", "true");
  });
});
