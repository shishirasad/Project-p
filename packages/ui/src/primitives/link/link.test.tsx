import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Link } from "./link";

describe("Link", () => {
  it("renders a link", () => {
    render(<Link href="/faris">Faris</Link>);
    expect(screen.getByRole("link", { name: "Faris" })).toHaveAttribute("href", "/faris");
  });
});
