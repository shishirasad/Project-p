import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Pagination } from "./pagination";

const labels = {
  previous: "Previous page",
  next: "Next page",
  page: (page: number) => `Go to page ${page}`,
  currentPage: (page: number) => `Current page, page ${page}`
};

describe("Pagination", () => {
  it("marks the current page", () => {
    render(<Pagination page={2} pageCount={4} labels={labels} />);
    expect(screen.getByRole("button", { name: "Current page, page 2" })).toHaveAttribute("aria-current", "page");
  });

  it("notifies page changes", () => {
    const onPageChange = vi.fn();
    render(<Pagination page={2} pageCount={4} labels={labels} onPageChange={onPageChange} />);
    fireEvent.click(screen.getByRole("button", { name: "Next page" }));
    expect(onPageChange).toHaveBeenCalledWith(3);
  });
});
