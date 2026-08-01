import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Combobox } from "./combobox";

const options = [{ value: "shirts", label: "Shirts" }];

describe("Combobox", () => {
  it("connects the input to a datalist", () => {
    const onValueChange = vi.fn();
    render(<Combobox label="Product type" options={options} onValueChange={onValueChange} />);
    const input = screen.getByLabelText("Product type");
    expect(input).toHaveAttribute("list");
    fireEvent.change(input, { target: { value: "shirts" } });
    expect(onValueChange).toHaveBeenCalledWith("shirts");
  });
});