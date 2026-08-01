import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { IconButton } from "./icon-button";

describe("IconButton", () => {
  it("requires an accessible name", () => {
    render(<IconButton ariaLabel="Search" icon="⌕" />);
    expect(screen.getByRole("button", { name: "Search" })).toBeInTheDocument();
  });
});
