import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Alert } from "./alert";

describe("Alert", () => {
  it("uses alert role for errors", () => {
    render(<Alert tone="error" title="Failed" description="Try again" />);
    expect(screen.getByRole("alert")).toHaveTextContent("Failed");
  });

  it("calls onDismiss from the close control", () => {
    const onDismiss = vi.fn();
    render(<Alert title="Saved" closeLabel="Dismiss alert" onDismiss={onDismiss} />);
    fireEvent.click(screen.getByRole("button", { name: "Dismiss alert" }));
    expect(onDismiss).toHaveBeenCalled();
  });
});