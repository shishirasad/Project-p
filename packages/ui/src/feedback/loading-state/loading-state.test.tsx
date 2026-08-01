import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LoadingState } from "./loading-state";

describe("LoadingState", () => {
  it("marks the region as busy", () => {
    render(<LoadingState title="Loading" />);
    expect(screen.getByRole("status")).toHaveAttribute("aria-busy", "true");
  });
});