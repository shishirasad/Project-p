import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";
import { Skeleton } from "../../primitives/skeleton";
import type { CommerceImage, CommerceImageFit, CommerceImageRatio } from "../types";
import { commerceRatioClasses } from "../utils";

export type ProductImageProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
  image: CommerceImage;
  ratio?: CommerceImageRatio;
  fit?: CommerceImageFit;
  priority?: boolean;
  isLoading?: boolean;
  overlay?: ReactNode;
};

export function ProductImage({ image, ratio = "portrait", fit = "cover", priority = false, isLoading = false, overlay, className, ...props }: ProductImageProps) {
  return (
    <div className={cn("relative isolate overflow-hidden rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-hover-surface)]", commerceRatioClasses[ratio], className)} {...props}>
      {image.placeholder ? <div className="absolute inset-0" aria-hidden="true">{image.placeholder}</div> : <Skeleton className="absolute inset-0 h-full w-full rounded-none border-0" aria-hidden="true" />}
      <img
        className={cn("relative z-10 h-full w-full transition duration-300", fit === "cover" ? "object-cover" : "object-contain")}
        src={image.src}
        srcSet={image.srcSet}
        sizes={image.sizes}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
      />
      {isLoading ? <Skeleton className="absolute inset-0 z-20 h-full w-full rounded-none border-0" aria-hidden="true" /> : null}
      {overlay ? <div className="absolute inset-x-3 top-3 z-30 flex justify-end gap-2">{overlay}</div> : null}
    </div>
  );
}
