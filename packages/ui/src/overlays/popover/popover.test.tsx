import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Button } from "../../primitives/button";
import { Popover } from "./popover";

describe("Popover", () => {
  it("toggles from the trigger", () => {
    render(<Popover trigger={<Button>Open note</Button>} title="Note">Content</Popover>);
    fireEvent.click(screen.getByRole("button", { name: "Open note" }));
    expect(screen.getByRole("dialog", { name: "Note" })).toBeInTheDocument();
  });

  it("notifies controlled open changes", () => {
    const onOpenChange = vi.fn();
    render(<Popover isOpen={false} onOpenChange={onOpenChange} trigger={<Button>Open note</Button>} title="Note">Content</Popover>);
    fireEvent.click(screen.getByRole("button", { name: "Open note" }));
    expect(onOpenChange).toHaveBeenCalledWith(true);
  });
});