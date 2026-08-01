import { act, fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Toast } from "./toast";

describe("Toast", () => {
  it("renders live feedback", () => {
    render(<Toast title="Saved" description="Ready" />);
    expect(screen.getByRole("status")).toHaveTextContent("Saved");
  });

  it("dismisses from the close control", () => {
    const onOpenChange = vi.fn();
    render(<Toast title="Saved" closeLabel="Dismiss notification" onOpenChange={onOpenChange} />);
    fireEvent.click(screen.getByRole("button", { name: "Dismiss notification" }));
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("supports auto hide", () => {
    vi.useFakeTimers();
    const onOpenChange = vi.fn();
    render(<Toast title="Saved" duration={500} onOpenChange={onOpenChange} />);
    act(() => vi.advanceTimersByTime(500));
    expect(onOpenChange).toHaveBeenCalledWith(false);
    vi.useRealTimers();
  });
});