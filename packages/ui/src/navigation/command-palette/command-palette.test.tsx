import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { CommandPalette } from "./command-palette";

const groups = [{ title: "Navigation", commands: [{ id: "faris", label: "Open Faris" }] }];

describe("CommandPalette", () => {
  it("renders commands when open", () => {
    render(<CommandPalette isOpen title="Commands" label="Search commands" closeLabel="Close" clearLabel="Clear" groups={groups} />);
    expect(screen.getByRole("dialog", { name: "Commands" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Open Faris" })).toBeInTheDocument();
  });

  it("notifies command selection", () => {
    const onCommandSelect = vi.fn();
    render(<CommandPalette isOpen title="Commands" label="Search commands" closeLabel="Close" clearLabel="Clear" groups={groups} onCommandSelect={onCommandSelect} />);
    fireEvent.click(screen.getByRole("button", { name: "Open Faris" }));
    expect(onCommandSelect).toHaveBeenCalledWith({ id: "faris", label: "Open Faris" });
  });
});

