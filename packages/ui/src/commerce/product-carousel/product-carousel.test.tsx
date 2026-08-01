import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProductCarousel } from "./product-carousel";

describe("ProductCarousel", () => {
  it("renders provided items with accessible controls", () => {
    render(<ProductCarousel title="Recommended" ariaLabel="Recommended products" previousLabel="Previous" nextLabel="Next" items={[<span key="one">First product</span>]} />);
    expect(screen.getByRole("region", { name: "Recommended products" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Previous" })).toBeInTheDocument();
    expect(screen.getByText("First product")).toBeInTheDocument();
  });
});
