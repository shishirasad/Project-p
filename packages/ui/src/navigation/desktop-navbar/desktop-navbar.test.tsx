import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { DesktopNavbar } from "./desktop-navbar";

const items = [
  { label: "Faris", href: "/faris" },
  { label: "Laaj", href: "/laaj" }
];

describe("DesktopNavbar", () => {
  it("renders navigation items and active state", () => {
    render(<DesktopNavbar logo={<a href="/">Porsion</a>} items={items} activeHref="/faris" />);
    expect(screen.getByRole("link", { name: "Faris" })).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("link", { name: "Laaj" })).toHaveAttribute("href", "/laaj");
  });

  it("notifies item selection for button items", () => {
    const onItemSelect = vi.fn();
    render(<DesktopNavbar logo={<a href="/">Porsion</a>} items={[{ label: "Menu" }]} onItemSelect={onItemSelect} />);
    fireEvent.click(screen.getByRole("button", { name: "Menu" }));
    expect(onItemSelect).toHaveBeenCalledWith({ label: "Menu" });
  });
});
