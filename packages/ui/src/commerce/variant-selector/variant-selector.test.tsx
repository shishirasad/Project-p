import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { VariantSelector } from "./variant-selector";
import { variantOptions } from "../story-data";

describe("VariantSelector", () => {
  it("supports uncontrolled selection and change callbacks", () => {
    const onValueChange = vi.fn();
    render(<VariantSelector options={variantOptions} defaultValue="regular" ariaLabel="Choose fit" onValueChange={onValueChange} />);
    fireEvent.click(screen.getByRole("radio", { name: /Relaxed fit/ }));
    expect(onValueChange).toHaveBeenCalledWith("relaxed");
    expect(screen.getByRole("radio", { name: /Relaxed fit/ })).toHaveAttribute("aria-checked", "true");
  });
});
