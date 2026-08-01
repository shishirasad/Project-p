import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";
import type { EditorialAlign, EditorialMedia } from "../types";
import { editorialAlignClasses, editorialBodyClass, editorialEyebrowClass, renderActions, renderEditorialMedia } from "../utils";

export type HeroProps = HTMLAttributes<HTMLElement> & {
  media: EditorialMedia;
  title: ReactNode;
  eyebrow?: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  align?: EditorialAlign;
  priority?: boolean;
  height?: "medium" | "large" | "screen";
};

const heightClasses = {
  medium: "min-h-[560px]",
  large: "min-h-[680px]",
  screen: "min-h-[min(820px,92vh)]"
};

export function Hero({ media, title, eyebrow, description, actions, align = "start", priority = true, height = "screen", className, ...props }: HeroProps) {
  return (
    <section className={cn("relative isolate overflow-hidden bg-[var(--color-background)] text-[var(--color-text)]", heightClasses[height], className)} {...props}>
      <div className="absolute inset-0" aria-hidden="true">{renderEditorialMedia(media, undefined, priority)}</div>
      <div className="absolute inset-0 bg-[var(--color-background)] opacity-25" aria-hidden="true" />
      <div className={cn("relative z-10 mx-auto flex min-h-[inherit] w-full max-w-[var(--container-max)] flex-col justify-end px-[var(--gutter)] py-14 md:py-20", editorialAlignClasses[align])}>
        <div className="max-w-3xl space-y-5">
          {eyebrow ? <p className={editorialEyebrowClass}>{eyebrow}</p> : null}
          <h1 className="text-5xl font-medium leading-tight text-[var(--color-text)] md:text-7xl">{title}</h1>
          {description ? <p className={cn(editorialBodyClass, "max-w-2xl")}>{description}</p> : null}
          {renderActions(actions)}
        </div>
      </div>
    </section>
  );
}