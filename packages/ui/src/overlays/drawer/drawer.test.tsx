import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Drawer } from "./drawer";

describe("Drawer", () => {
  it("renders an accessible drawer dialog", () => {
    render(<Drawer isOpen title="Filters" closeLabel="Close drawer">Content</Drawer>);
    expect(screen.getByRole("dialog", { name: "Filters" })).toBeInTheDocument();
  });

  it("dismisses on Escape", () => {
    const onOpenChange = vi.fn();
    render(<Drawer isOpen title="Filters" closeLabel="Close drawer" onOpenChange={onOpenChange} />);
    fireEvent.keyDown(document, { key: "Escape" });
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });
});