import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { NumberInput } from "./number-input";

describe("NumberInput", () => {
  it("uses numeric input and emits numeric values", () => {
    const onValueChange = vi.fn();
    render(<NumberInput label="Measurement" onValueChange={onValueChange} />);
    const input = screen.getByLabelText("Measurement");
    expect(input).toHaveAttribute("type", "number");
    fireEvent.change(input, { target: { value: "42" } });
    expect(onValueChange).toHaveBeenCalledWith(42);
  });
});