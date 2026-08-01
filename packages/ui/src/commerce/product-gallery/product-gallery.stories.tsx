import { ProductGallery } from "./product-gallery";
import { galleryImages } from "../story-data";

export default {
  title: "Commerce/ProductGallery",
  component: ProductGallery,
  args: {
    images: galleryImages,
    thumbnailsLabel: "Product gallery thumbnails",
    imageLabel: (index: number) => `View product image ${index + 1}`
  }
};

export const Default = {};
export const Square = { args: { ratio: "square" } };
