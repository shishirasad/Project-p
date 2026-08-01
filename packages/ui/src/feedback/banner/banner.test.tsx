import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Banner } from "./banner";

describe("Banner", () => {
  it("renders page-level feedback", () => {
    render(<Banner title="Maintenance" description="Publishing is paused" />);
    expect(screen.getByRole("status")).toHaveTextContent("Maintenance");
  });

  it("supports dismiss actions", () => {
    const onDismiss = vi.fn();
    render(<Banner title="Maintenance" closeLabel="Dismiss banner" onDismiss={onDismiss} />);
    fireEvent.click(screen.getByRole("button", { name: "Dismiss banner" }));
    expect(onDismiss).toHaveBeenCalled();
  });
});