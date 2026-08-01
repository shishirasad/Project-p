import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ProductGallery } from "./product-gallery";
import { galleryImages } from "../story-data";

describe("ProductGallery", () => {
  it("supports thumbnail selection", () => {
    const onImageChange = vi.fn();
    render(<ProductGallery images={galleryImages} thumbnailsLabel="Thumbnails" imageLabel={(index) => `Image ${index + 1}`} onImageChange={onImageChange} />);
    fireEvent.click(screen.getByRole("option", { name: "Image 2" }));
    expect(onImageChange).toHaveBeenCalledWith(1);
    expect(screen.getByRole("option", { name: "Image 2" })).toHaveAttribute("aria-selected", "true");
  });
});
