import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";
import { Container } from "../../primitives/container";
import type { EditorialMedia } from "../types";
import { editorialBodyClass, editorialEyebrowClass, renderEditorialMedia } from "../utils";

export type ImageNarrativeProps = HTMLAttributes<HTMLElement> & {
  media: EditorialMedia;
  title?: ReactNode;
  eyebrow?: ReactNode;
  caption?: ReactNode;
  children?: ReactNode;
};

export function ImageNarrative({ media, title, eyebrow, caption, children, className, ...props }: ImageNarrativeProps) {
  return (
    <section className={cn("py-16 md:py-24", className)} {...props}>
      <Container className="grid gap-6">
        <figure className="grid gap-4">
          <div className="aspect-[16/9] overflow-hidden rounded-[var(--radius-sm)] bg-[var(--color-hover-surface)]">{renderEditorialMedia(media)}</div>
          {caption ? <figcaption className="text-[0.9375rem] leading-[1.65] text-[var(--color-text-muted)]">{caption}</figcaption> : null}
        </figure>
        {(title || eyebrow || children) ? (
          <div className="max-w-3xl space-y-3">
            {eyebrow ? <p className={editorialEyebrowClass}>{eyebrow}</p> : null}
            {title ? <h2 className="max-w-[18ch] text-balance font-serif text-[2.125rem] font-normal leading-[1.14] text-[var(--color-text)] md:text-5xl">{title}</h2> : null}
            {children ? <div className={editorialBodyClass}>{children}</div> : null}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
