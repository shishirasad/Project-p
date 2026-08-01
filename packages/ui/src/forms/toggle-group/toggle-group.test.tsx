import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ToggleGroup } from "./toggle-group";

const options = [
  { value: "regular", label: "Regular" },
  { value: "slim", label: "Slim" }
];

describe("ToggleGroup", () => {
  it("supports pressed state changes", () => {
    const onValueChange = vi.fn();
    render(<ToggleGroup ariaLabel="Fit preference" options={options} onValueChange={onValueChange} />);
    fireEvent.click(screen.getByRole("button", { name: "Slim" }));
    expect(onValueChange).toHaveBeenCalledWith("slim");
  });
});