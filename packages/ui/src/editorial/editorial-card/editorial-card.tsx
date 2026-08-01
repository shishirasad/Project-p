import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";
import type { EditorialMedia } from "../types";
import { editorialEyebrowClass, renderEditorialMedia } from "../utils";

export type EditorialCardProps = HTMLAttributes<HTMLElement> & {
  href?: string;
  media: EditorialMedia;
  title: ReactNode;
  eyebrow?: ReactNode;
  excerpt?: ReactNode;
  meta?: ReactNode;
  actionLabel?: ReactNode;
};

export function EditorialCard({ href, media, title, eyebrow, excerpt, meta, actionLabel, className, ...props }: EditorialCardProps) {
  const content = (
    <>
      <div className="aspect-[4/5] overflow-hidden rounded-[var(--radius-sm)] bg-[var(--color-hover-surface)]">{renderEditorialMedia(media)}</div>
      <div className="grid gap-2 pt-4">
        {eyebrow ? <p className={editorialEyebrowClass}>{eyebrow}</p> : null}
        <h3 className="text-2xl font-medium leading-tight text-[var(--color-text)]">{title}</h3>
        {excerpt ? <p className="text-sm leading-6 text-[var(--color-text-muted)]">{excerpt}</p> : null}
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
          {meta ? <span>{meta}</span> : null}
          {actionLabel ? <span className="text-[var(--color-text)]">{actionLabel}</span> : null}
        </div>
      </div>
    </>
  );

  if (href) {
    return <a className={cn("group grid min-h-11 text-[var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]", className)} href={href} {...props}>{content}</a>;
  }

  return <article className={cn("grid text-[var(--color-text)]", className)} {...props}>{content}</article>;
}