import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { SearchOverlay } from "./search-overlay";

describe("SearchOverlay", () => {
  it("renders suggestions when open", () => {
    render(<SearchOverlay isOpen title="Search" label="Search" closeLabel="Close" suggestions={[{ label: "Linen", href: "/search?q=linen" }]} />);
    expect(screen.getByRole("dialog", { name: "Search" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Linen" })).toHaveAttribute("href", "/search?q=linen");
  });

  it("notifies close and query changes", () => {
    const onClose = vi.fn();
    const onQueryChange = vi.fn();
    render(<SearchOverlay isOpen title="Search panel" label="Search query" closeLabel="Close" onClose={onClose} onQueryChange={onQueryChange} />);
    fireEvent.change(screen.getByLabelText("Search query"), { target: { value: "polo" } });
    fireEvent.click(screen.getByRole("button", { name: "Close" }));
    expect(onQueryChange).toHaveBeenCalledWith("polo");
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});

