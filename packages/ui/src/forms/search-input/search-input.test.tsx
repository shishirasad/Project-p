import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { SearchInput } from "./search-input";

describe("SearchInput", () => {
  it("uses search semantics", () => {
    render(<SearchInput label="Search" />);
    expect(screen.getByLabelText("Search")).toHaveAttribute("type", "search");
  });

  it("calls the clear handler", () => {
    const onClear = vi.fn();
    render(<SearchInput label="Search" defaultValue="linen" clearLabel="Clear search" onClear={onClear} />);
    fireEvent.click(screen.getByRole("button", { name: "Clear search" }));
    expect(onClear).toHaveBeenCalledTimes(1);
  });
});