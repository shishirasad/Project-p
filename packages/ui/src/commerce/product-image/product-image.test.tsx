import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProductImage } from "./product-image";
import { campaignImage } from "../story-data";

describe("ProductImage", () => {
  it("renders a lazy responsive product image", () => {
    render(<ProductImage image={campaignImage} />);
    const image = screen.getByAltText(campaignImage.alt);
    expect(image).toHaveAttribute("loading", "lazy");
    expect(image).toHaveAttribute("sizes", campaignImage.sizes);
  });
});
