import type { ReactNode } from "react";
import { cn } from "../../lib/cn";
import type { EditorialAlign, EditorialImageRatio, EditorialMedia } from "../types";

export const editorialEyebrowClass = "text-[0.8125rem] font-medium uppercase leading-5 text-[var(--color-text-muted)]";
export const editorialBodyClass = "max-w-[65ch] text-base leading-[1.7] text-[var(--color-text-muted)] md:text-lg";

export const editorialAlignClasses: Record<EditorialAlign, string> = {
  start: "items-start text-left",
  center: "items-center text-center",
  end: "items-end text-right"
};

export const editorialRatioClasses: Record<EditorialImageRatio, string> = {
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  wide: "aspect-[4/3]",
  cinematic: "aspect-[16/9]"
};

export function renderEditorialMedia(media: EditorialMedia, className?: string, priority = false) {
  if (media.kind === "video") {
    return (
      <video className={cn("h-full w-full object-cover", className)} aria-label={media.label} poster={media.poster} controls playsInline preload="metadata">
        <source src={media.src} type={media.type} />
      </video>
    );
  }

  return (
    <img
      className={cn("h-full w-full object-cover", className)}
      src={media.src}
      srcSet={media.srcSet}
      sizes={media.sizes}
      alt={media.alt}
      width={media.width}
      height={media.height}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : "auto"}
    />
  );
}

export function renderActions(actions?: ReactNode) {
  if (!actions) return null;
  return <div className="flex min-w-0 flex-wrap items-center gap-3">{actions}</div>;
}
