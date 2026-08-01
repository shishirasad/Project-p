import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Logo } from "./logo";

describe("Logo", () => {
  it("renders as a link when href is provided", () => {
    render(<Logo href="/" />);
    expect(screen.getByRole("link", { name: "Porsion Studio" })).toHaveAttribute("href", "/");
  });
});
