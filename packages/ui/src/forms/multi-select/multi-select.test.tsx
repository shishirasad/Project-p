import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { MultiSelect } from "./multi-select";

const options = [
  { value: "linen", label: "Linen" },
  { value: "cotton", label: "Cotton" }
];

describe("MultiSelect", () => {
  it("supports controlled value changes", () => {
    const onValueChange = vi.fn();
    render(<MultiSelect name="fabric" label="Fabric preferences" options={options} value={["linen"]} onValueChange={onValueChange} />);
    fireEvent.click(screen.getByLabelText("Cotton"));
    expect(onValueChange).toHaveBeenCalledWith(["linen", "cotton"]);
  });

  it("announces invalid state", () => {
    render(<MultiSelect name="fabric" label="Fabric preferences" options={options} isInvalid errorMessage="Choose at least one option." />);
    expect(screen.getByRole("alert")).toHaveTextContent("Choose at least one option.");
  });
});