import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Breadcrumb } from "./breadcrumb";

describe("Breadcrumb", () => {
  it("marks the last item as the current page", () => {
    render(<Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Faris" }]} />);
    expect(screen.getByText("Faris")).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("href", "/");
  });
});
