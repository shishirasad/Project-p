import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";
import { Container } from "../../primitives/container";
import type { EditorialMedia } from "../types";
import { editorialBodyClass, editorialEyebrowClass, renderActions, renderEditorialMedia } from "../utils";

export type CampaignBlockProps = HTMLAttributes<HTMLElement> & {
  media: EditorialMedia;
  title: ReactNode;
  eyebrow?: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  mediaPosition?: "start" | "end";
};

export function CampaignBlock({ media, title, eyebrow, description, actions, mediaPosition = "end", className, ...props }: CampaignBlockProps) {
  return (
    <section className={cn("py-16 md:py-24", className)} {...props}>
      <Container>
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className={cn("aspect-[4/3] overflow-hidden rounded-[var(--radius-sm)] bg-[var(--color-hover-surface)]", mediaPosition === "end" && "md:order-2")}>{renderEditorialMedia(media)}</div>
          <div className="grid gap-5">
            {eyebrow ? <p className={editorialEyebrowClass}>{eyebrow}</p> : null}
            <h2 className="max-w-[18ch] text-balance font-serif text-[2.125rem] font-normal leading-[1.14] text-[var(--color-text)] md:text-5xl">{title}</h2>
            {description ? <p className={editorialBodyClass}>{description}</p> : null}
            {renderActions(actions)}
          </div>
        </div>
      </Container>
    </section>
  );
}
