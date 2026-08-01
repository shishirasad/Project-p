import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ColorSwatch } from "./color-swatch";
import { colorOptions } from "../story-data";

describe("ColorSwatch", () => {
  it("announces colors and emits changes", () => {
    const onValueChange = vi.fn();
    render(<ColorSwatch options={colorOptions} defaultValue="black" ariaLabel="Choose color" onValueChange={onValueChange} />);
    fireEvent.click(screen.getByRole("radio", { name: "Stone" }));
    expect(onValueChange).toHaveBeenCalledWith("stone");
  });
});
