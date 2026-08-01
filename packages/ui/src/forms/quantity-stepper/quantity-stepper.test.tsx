import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { QuantityStepper } from "./quantity-stepper";

describe("QuantityStepper", () => {
  it("increments and decrements values", () => {
    const onValueChange = vi.fn();
    render(<QuantityStepper label="Quantity" inputLabel="Quantity value" decrementLabel="Decrease quantity" incrementLabel="Increase quantity" min={1} max={5} defaultValue={2} onValueChange={onValueChange} />);
    fireEvent.click(screen.getByRole("button", { name: "Increase quantity" }));
    expect(onValueChange).toHaveBeenCalledWith(3);
  });
});