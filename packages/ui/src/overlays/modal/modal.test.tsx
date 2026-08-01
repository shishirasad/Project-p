import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Modal } from "./modal";

describe("Modal", () => {
  it("renders an accessible dialog", () => {
    render(<Modal isOpen title="Review" closeLabel="Close modal">Content</Modal>);
    expect(screen.getByRole("dialog", { name: "Review" })).toBeInTheDocument();
  });

  it("dismisses from the close control", () => {
    const onOpenChange = vi.fn();
    render(<Modal isOpen title="Review" closeLabel="Close modal" onOpenChange={onOpenChange} />);
    fireEvent.click(screen.getByRole("button", { name: "Close modal" }));
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });
});