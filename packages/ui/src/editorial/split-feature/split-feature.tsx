import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";
import { Container } from "../../primitives/container";
import type { EditorialMedia } from "../types";
import { editorialBodyClass, editorialEyebrowClass, renderActions, renderEditorialMedia } from "../utils";

export type SplitFeatureProps = HTMLAttributes<HTMLElement> & {
  media: EditorialMedia;
  title: ReactNode;
  eyebrow?: ReactNode;
  description?: ReactNode;
  features?: ReactNode[];
  actions?: ReactNode;
  mediaPosition?: "start" | "end";
};

export function SplitFeature({ media, title, eyebrow, description, features, actions, mediaPosition = "start", className, ...props }: SplitFeatureProps) {
  return (
    <section className={cn("py-16 md:py-24", className)} {...props}>
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className={cn("aspect-[3/4] overflow-hidden rounded-[var(--radius-sm)] bg-[var(--color-hover-surface)]", mediaPosition === "end" && "md:order-2")}>{renderEditorialMedia(media)}</div>
          <div className="grid gap-5">
            {eyebrow ? <p className={editorialEyebrowClass}>{eyebrow}</p> : null}
            <h2 className="max-w-[18ch] text-balance font-serif text-[2.125rem] font-normal leading-[1.14] text-[var(--color-text)] md:text-5xl">{title}</h2>
            {description ? <p className={editorialBodyClass}>{description}</p> : null}
            {features?.length ? <ul className="grid gap-3 text-[0.9375rem] leading-[1.65] text-[var(--color-text-muted)]">{features.map((feature, index) => <li key={index} className="border-t border-[var(--color-border)] pt-3">{feature}</li>)}</ul> : null}
            {renderActions(actions)}
          </div>
        </div>
      </Container>
    </section>
  );
}
