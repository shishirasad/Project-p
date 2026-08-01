import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";
import { Container } from "../../primitives/container";
import type { EditorialMedia } from "../types";
import { editorialBodyClass, editorialEyebrowClass, renderEditorialMedia } from "../utils";

export type BrandGatewayItem = {
  id: string;
  name: ReactNode;
  href: string;
  description?: ReactNode;
  eyebrow?: ReactNode;
  media: EditorialMedia;
  actionLabel?: ReactNode;
};

export type BrandGatewayProps = HTMLAttributes<HTMLElement> & {
  title?: ReactNode;
  eyebrow?: ReactNode;
  description?: ReactNode;
  items: BrandGatewayItem[];
};

export function BrandGateway({ title, eyebrow, description, items, className, ...props }: BrandGatewayProps) {
  return (
    <section className={cn("py-16 md:py-24", className)} {...props}>
      <Container className="grid gap-10">
        {(title || eyebrow || description) ? (
          <div className="max-w-3xl space-y-3">
            {eyebrow ? <p className={editorialEyebrowClass}>{eyebrow}</p> : null}
            {title ? <h2 className="text-3xl font-medium leading-tight text-[var(--color-text)] md:text-5xl">{title}</h2> : null}
            {description ? <p className={editorialBodyClass}>{description}</p> : null}
          </div>
        ) : null}
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <a key={item.id} href={item.href} className="group grid min-h-11 gap-4 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-surface)] p-3 text-[var(--color-text)] transition duration-200 hover:border-[var(--color-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]">
              <div className="aspect-[4/5] overflow-hidden rounded-[var(--radius-sm)] bg-[var(--color-hover-surface)]">{renderEditorialMedia(item.media)}</div>
              <div className="grid gap-2 px-1 pb-1">
                {item.eyebrow ? <p className={editorialEyebrowClass}>{item.eyebrow}</p> : null}
                <h3 className="text-2xl font-medium leading-tight text-[var(--color-text)]">{item.name}</h3>
                {item.description ? <p className="text-sm leading-6 text-[var(--color-text-muted)]">{item.description}</p> : null}
                {item.actionLabel ? <span className="inline-flex min-h-11 items-center text-xs uppercase tracking-[0.18em] text-[var(--color-text)]">{item.actionLabel}</span> : null}
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}