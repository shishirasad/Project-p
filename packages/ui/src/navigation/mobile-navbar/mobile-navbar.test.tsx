import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { MobileNavbar } from "./mobile-navbar";

describe("MobileNavbar", () => {
  it("renders mobile links and active state", () => {
    render(<MobileNavbar items={[{ label: "Home", href: "/" }, { label: "Bag", href: "/bag" }]} activeHref="/bag" />);
    expect(screen.getByRole("link", { name: "Bag" })).toHaveAttribute("aria-current", "page");
  });

  it("runs action callbacks", () => {
    const onPress = vi.fn();
    render(<MobileNavbar items={[{ label: "Search", onPress }]} />);
    fireEvent.click(screen.getByRole("button", { name: "Search" }));
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
