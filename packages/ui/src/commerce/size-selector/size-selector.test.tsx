import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { SizeSelector } from "./size-selector";
import { sizeOptions } from "../story-data";

describe("SizeSelector", () => {
  it("selects a size option", () => {
    const onValueChange = vi.fn();
    render(<SizeSelector options={sizeOptions} defaultValue="m" ariaLabel="Choose size" onValueChange={onValueChange} />);
    fireEvent.click(screen.getByRole("radio", { name: "L" }));
    expect(onValueChange).toHaveBeenCalledWith("l");
  });
});
