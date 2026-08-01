import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Select } from "./select";

const options = [
  { value: "shirts", label: "Shirts" },
  { value: "trousers", label: "Trousers" }
];

describe("Select", () => {
  it("renders options and notifies value changes", () => {
    const onValueChange = vi.fn();
    render(<Select label="Category" options={options} onValueChange={onValueChange} />);
    fireEvent.change(screen.getByLabelText("Category"), { target: { value: "trousers" } });
    expect(onValueChange).toHaveBeenCalledWith("trousers");
  });
});