import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { EmptyState } from "./empty-state";

describe("EmptyState", () => {
  it("renders empty state copy", () => {
    render(<EmptyState title="No results" description="Try another filter" />);
    expect(screen.getByRole("heading", { name: "No results" })).toBeInTheDocument();
  });
});