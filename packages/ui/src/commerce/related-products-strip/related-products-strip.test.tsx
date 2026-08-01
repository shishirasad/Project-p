import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { RelatedProductsStrip } from "./related-products-strip";

describe("RelatedProductsStrip", () => {
  it("reuses the carousel contract", () => {
    render(<RelatedProductsStrip title="Related" ariaLabel="Related products" previousLabel="Previous" nextLabel="Next" items={[<span key="item">Related item</span>]} />);
    expect(screen.getByRole("region", { name: "Related products" })).toBeInTheDocument();
    expect(screen.getByText("Related item")).toBeInTheDocument();
  });
});
