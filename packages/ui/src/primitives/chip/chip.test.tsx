import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Chip } from "./chip";

describe("Chip", () => {
  it("communicates selected state", () => {
    render(<Chip selected>Faris</Chip>);
    expect(screen.getByRole("button", { name: "Faris" })).toHaveAttribute("aria-pressed", "true");
  });
});
