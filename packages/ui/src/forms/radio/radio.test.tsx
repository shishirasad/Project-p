import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Radio } from "./radio";

const options = [
  { value: "regular", label: "Regular" },
  { value: "slim", label: "Slim" }
];

describe("Radio", () => {
  it("notifies value changes", () => {
    const onValueChange = vi.fn();
    render(<Radio name="fit" label="Fit preference" options={options} onValueChange={onValueChange} />);
    fireEvent.click(screen.getByLabelText("Slim"));
    expect(onValueChange).toHaveBeenCalledWith("slim");
  });
});