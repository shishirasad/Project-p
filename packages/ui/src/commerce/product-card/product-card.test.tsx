import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ProductCard } from "./product-card";
import { sampleProduct } from "../story-data";

describe("ProductCard", () => {
  it("renders product content and emits action callbacks", () => {
    const onAddToBag = vi.fn();
    const onWishlist = vi.fn();
    const onEnquiry = vi.fn();
    render(<ProductCard product={sampleProduct} viewProductLabel="View product" addToBagLabel="Add to bag" wishlistLabel="Save" enquiryLabel="Ask about this product" onAddToBag={onAddToBag} onWishlist={onWishlist} onEnquiry={onEnquiry} />);
    expect(screen.getByText("Faris Old Money Polo")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Add to bag" }));
    fireEvent.click(screen.getByRole("button", { name: "Save" }));
    fireEvent.click(screen.getByRole("button", { name: "Ask about this product" }));
    expect(onAddToBag).toHaveBeenCalledWith(sampleProduct);
    expect(onWishlist).toHaveBeenCalledWith(sampleProduct);
    expect(onEnquiry).toHaveBeenCalledWith(sampleProduct);
  });

  it("uses a semantic role button fallback without nesting headings in a native button", () => {
    const onProductSelect = vi.fn();
    const product = { ...sampleProduct, href: undefined };
    render(<ProductCard product={product} viewProductLabel="View static product" onProductSelect={onProductSelect} />);
    const cardButton = screen.getByRole("button", { name: "View static product" });
    expect(cardButton.tagName).toBe("DIV");
    fireEvent.keyDown(cardButton, { key: "Enter" });
    expect(onProductSelect).toHaveBeenCalledWith(product);
  });

  it("exposes the selected product card variant", () => {
    render(<ProductCard product={sampleProduct} variant="editorial" />);
    expect(screen.getByText("Faris Old Money Polo").closest("article")).toHaveAttribute("data-variant", "editorial");
  });
});
