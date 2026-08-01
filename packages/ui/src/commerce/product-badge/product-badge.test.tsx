import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProductBadge } from "./product-badge";

describe("ProductBadge", () => {
  it("exposes the selected tone", () => {
    render(<ProductBadge tone="accent">New</ProductBadge>);
    expect(screen.getByText("New")).toHaveAttribute("data-tone", "accent");
  });
});
