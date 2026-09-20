import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";
import { Container } from "../../primitives/container";
import type { EditorialAlign } from "../types";
import { editorialAlignClasses, editorialBodyClass, editorialEyebrowClass, renderActions } from "../utils";

export type CTASectionProps = HTMLAttributes<HTMLElement> & {
  title: ReactNode;
  eyebrow?: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  align?: EditorialAlign;
};

export function CTASection({ title, eyebrow, description, actions, align = "center", className, ...props }: CTASectionProps) {
  return (
    <section className={cn("py-16 md:py-24", className)} {...props}>
      <Container variant="reading" className={cn("flex flex-col gap-5", editorialAlignClasses[align])}>
        {eyebrow ? <p className={editorialEyebrowClass}>{eyebrow}</p> : null}
        <h2 className="text-balance font-serif text-[2.125rem] font-normal leading-[1.14] text-[var(--color-text)] md:text-5xl">{title}</h2>
        {description ? <p className={editorialBodyClass}>{description}</p> : null}
        {renderActions(actions)}
      </Container>
    </section>
  );
}
