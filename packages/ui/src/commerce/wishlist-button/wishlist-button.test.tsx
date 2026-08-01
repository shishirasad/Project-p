import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { WishlistButton } from "./wishlist-button";

describe("WishlistButton", () => {
  it("exposes selected state through aria-pressed", () => {
    render(<WishlistButton ariaLabel="Save" isSelected />);
    expect(screen.getByRole("button", { name: "Save" })).toHaveAttribute("aria-pressed", "true");
  });
});
