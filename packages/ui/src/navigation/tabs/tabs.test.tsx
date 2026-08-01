import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Tabs } from "./tabs";

const items = [{ value: "faris", label: "Faris" }, { value: "laaj", label: "Laaj" }];

describe("Tabs", () => {
  it("supports uncontrolled selection", () => {
    render(<Tabs items={items} defaultValue="faris" />);
    fireEvent.click(screen.getByRole("tab", { name: "Laaj" }));
    expect(screen.getByRole("tab", { name: "Laaj" })).toHaveAttribute("aria-selected", "true");
  });

  it("notifies controlled selection changes", () => {
    const onValueChange = vi.fn();
    render(<Tabs items={items} value="faris" onValueChange={onValueChange} />);
    fireEvent.click(screen.getByRole("tab", { name: "Laaj" }));
    expect(onValueChange).toHaveBeenCalledWith("laaj");
  });
});
