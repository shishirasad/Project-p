import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";
import type { EditorialImageRatio, EditorialMedia } from "../types";
import { editorialRatioClasses, renderEditorialMedia } from "../utils";

export type MediaBlockProps = HTMLAttributes<HTMLElement> & {
  media: EditorialMedia;
  ratio?: EditorialImageRatio;
  caption?: ReactNode;
  priority?: boolean;
};

export function MediaBlock({ media, ratio = "wide", caption, priority = false, className, ...props }: MediaBlockProps) {
  return (
    <figure className={cn("grid gap-3", className)} {...props}>
      <div className={cn("overflow-hidden rounded-[var(--radius-sm)] bg-[var(--color-hover-surface)]", editorialRatioClasses[ratio])}>{renderEditorialMedia(media, undefined, priority)}</div>
      {caption ? <figcaption className="text-sm leading-6 text-[var(--color-text-muted)]">{caption}</figcaption> : null}
    </figure>
  );
}