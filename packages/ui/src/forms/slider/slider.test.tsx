import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Slider } from "./slider";

describe("Slider", () => {
  it("emits numeric values", () => {
    const onValueChange = vi.fn();
    render(<Slider label="Fit confidence" min={0} max={100} onValueChange={onValueChange} />);
    fireEvent.change(screen.getByLabelText("Fit confidence"), { target: { value: "80" } });
    expect(onValueChange).toHaveBeenCalledWith(80);
  });
});