import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ConfirmDialog } from "./confirm-dialog";

describe("ConfirmDialog", () => {
  it("calls confirm action", () => {
    const onConfirm = vi.fn();
    render(<ConfirmDialog isOpen title="Publish?" closeLabel="Close confirmation" cancelLabel="Cancel" confirmLabel="Publish" onConfirm={onConfirm} />);
    fireEvent.click(screen.getByRole("button", { name: "Publish" }));
    expect(onConfirm).toHaveBeenCalled();
  });

  it("uses alertdialog for danger confirmations", () => {
    render(<ConfirmDialog isOpen tone="danger" title="Archive?" closeLabel="Close confirmation" cancelLabel="Cancel" confirmLabel="Archive" />);
    expect(screen.getByRole("alertdialog", { name: "Archive?" })).toBeInTheDocument();
  });
});