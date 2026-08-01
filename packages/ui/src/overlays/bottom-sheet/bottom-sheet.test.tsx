import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BottomSheet } from "./bottom-sheet";

describe("BottomSheet", () => {
  it("renders a mobile-first dialog", () => {
    render(<BottomSheet isOpen title="Select size" closeLabel="Close bottom sheet">Content</BottomSheet>);
    expect(screen.getByRole("dialog", { name: "Select size" })).toBeInTheDocument();
  });
});