"use client";

import type { HTMLAttributes, KeyboardEvent, ReactNode } from "react";
import { useId, useMemo } from "react";
import { cn } from "../../lib/cn";
import { useControllableState } from "../../forms/hooks";
import type { CommerceImage, CommerceImageRatio } from "../types";
import { commerceFocusClass, getBoundedIndex } from "../utils";
import { ProductImage } from "../product-image";

export type ProductGalleryProps = Omit<HTMLAttributes<HTMLDivElement>, "onChange"> & {
  images: CommerceImage[];
  value?: number;
  defaultValue?: number;
  onImageChange?: (index: number) => void;
  ratio?: CommerceImageRatio;
  thumbnailsLabel: string;
  imageLabel: (index: number) => string;
  emptyState?: ReactNode;
};

export function ProductGallery({ images, value, defaultValue = 0, onImageChange, ratio = "portrait", thumbnailsLabel, imageLabel, emptyState, className, ...props }: ProductGalleryProps) {
  const galleryId = useId();
  const [selectedIndex, setSelectedIndex] = useControllableState({ value, defaultValue, onChange: onImageChange });
  const safeIndex = images.length > 0 ? Math.min(Math.max(selectedIndex, 0), images.length - 1) : 0;
  const selectedImage = images[safeIndex];
  const imageIds = useMemo(() => images.map((_, index) => `${galleryId}-image-${index}`), [galleryId, images]);

  function selectIndex(nextIndex: number) {
    setSelectedIndex(getBoundedIndex(nextIndex, 0, images.length));
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      selectIndex(getBoundedIndex(index, 1, images.length));
    }
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      selectIndex(getBoundedIndex(index, -1, images.length));
    }
    if (event.key === "Home") {
      event.preventDefault();
      selectIndex(0);
    }
    if (event.key === "End") {
      event.preventDefault();
      selectIndex(images.length - 1);
    }
  }

  if (!selectedImage) return emptyState ? <div className={className} {...props}>{emptyState}</div> : null;

  return (
    <div className={cn("grid gap-3", className)} {...props}>
      <ProductImage id={imageIds[safeIndex]} image={selectedImage} ratio={ratio} />
      {images.length > 1 ? (
        <div role="listbox" aria-label={thumbnailsLabel} className="flex max-w-full gap-2 overflow-x-auto pb-1">
          {images.map((image, index) => {
            const selected = index === safeIndex;
            return (
              <button
                key={`${image.src}-${index}`}
                type="button"
                role="option"
                aria-selected={selected}
                aria-controls={imageIds[index]}
                aria-label={imageLabel(index)}
                className={cn(
                  "min-h-11 min-w-11 overflow-hidden rounded-[var(--radius-sm)] border bg-[var(--color-surface)] transition duration-200",
                  selected ? "border-[var(--color-accent)]" : "border-[var(--color-border)] hover:border-[var(--color-accent)]",
                  commerceFocusClass
                )}
                onClick={() => selectIndex(index)}
                onKeyDown={(event) => handleKeyDown(event, index)}
              >
                <img className="h-11 w-11 object-cover" src={image.src} alt="" loading="lazy" decoding="async" />
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
