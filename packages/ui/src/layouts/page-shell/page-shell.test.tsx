import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PageShell } from "./page-shell";

describe("PageShell", () => {
  it("renders header, main content, footer, and skip link", () => {
    render(<PageShell header={<div>Header</div>} footer={<div>Footer</div>} skipLinkLabel="Skip to content"><p>Main</p></PageShell>);
    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByRole("main")).toHaveAttribute("id", "main-content");
    expect(screen.getByRole("link", { name: "Skip to content" })).toHaveAttribute("href", "#main-content");
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });
});