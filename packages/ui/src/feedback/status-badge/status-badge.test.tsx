import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { StatusBadge } from "./status-badge";

describe("StatusBadge", () => {
  it("renders status with tone", () => {
    render(<StatusBadge tone="success" label="Active" />);
    expect(screen.getByText("Active").parentElement).toHaveAttribute("data-tone", "success");
  });
});