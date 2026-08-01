import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { AddToBagButton } from "./add-to-bag-button";

describe("AddToBagButton", () => {
  it("uses a prop label and emits click events", () => {
    const onClick = vi.fn();
    render(<AddToBagButton label="Add to bag" onClick={onClick} />);
    fireEvent.click(screen.getByRole("button", { name: "Add to bag" }));
    expect(onClick).toHaveBeenCalled();
  });
});
