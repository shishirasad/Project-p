"use client";

import { ProductGallery } from "@porsion/ui";
import type { CommerceImage } from "@porsion/ui";

type StorefrontProductGalleryProps = {
  title: string;
  images: CommerceImage[];
};

export function StorefrontProductGallery({ title, images }: StorefrontProductGalleryProps) {
  return (
    <ProductGallery
      images={images}
      ratio="portrait"
      thumbnailsLabel={`${title} gallery`}
      imageLabel={(index) => `View image ${index + 1} of ${images.length}`}
    />
  );
}