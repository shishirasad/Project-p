import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";
import { Container } from "../../primitives/container";
import type { EditorialAlign } from "../types";
import { editorialAlignClasses, editorialEyebrowClass } from "../utils";

export type QuoteBlockProps = HTMLAttributes<HTMLElement> & {
  quote: ReactNode;
  cite?: ReactNode;
  eyebrow?: ReactNode;
  align?: EditorialAlign;
};

export function QuoteBlock({ quote, cite, eyebrow, align = "center", className, ...props }: QuoteBlockProps) {
  return (
    <section className={cn("py-16 md:py-24", className)} {...props}>
      <Container variant="reading" className={cn("flex flex-col gap-5", editorialAlignClasses[align])}>
        {eyebrow ? <p className={editorialEyebrowClass}>{eyebrow}</p> : null}
        <blockquote className="text-balance font-serif text-[2.125rem] font-normal leading-[1.2] text-[var(--color-text)] md:text-5xl">{quote}</blockquote>
        {cite ? <p className="text-[0.8125rem] font-medium uppercase text-[var(--color-text-muted)]">{cite}</p> : null}
      </Container>
    </section>
  );
}
