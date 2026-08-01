"use client";

import type { HTMLAttributes, ReactNode } from "react";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../../lib/cn";
import { IconButton } from "../../primitives/icon-button";

export type ProductCarouselProps = Omit<HTMLAttributes<HTMLElement>, "children"> & {
  items: ReactNode[];
  ariaLabel: string;
  previousLabel: string;
  nextLabel: string;
  title?: ReactNode;
  emptyState?: ReactNode;
};

export function ProductCarousel({ items, ariaLabel, previousLabel, nextLabel, title, emptyState, className, ...props }: ProductCarouselProps) {
  const listRef = useRef<HTMLUListElement>(null);

  function scrollBy(direction: 1 | -1) {
    const list = listRef.current;
    if (!list || typeof list.scrollBy !== "function") return;
    const reduceMotion = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    list.scrollBy({ left: direction * Math.max(list.clientWidth * 0.8, 240), behavior: reduceMotion ? "auto" : "smooth" });
  }

  if (items.length === 0) return emptyState ? <section className={className} aria-label={ariaLabel} {...props}>{emptyState}</section> : null;

  return (
    <section className={cn("grid min-w-0 gap-4", className)} aria-label={ariaLabel} {...props}>
      <div className="flex min-w-0 items-center justify-between gap-3">
        {title ? <h3 className="min-w-0 text-base font-medium text-[var(--color-text)]">{title}</h3> : <span />}
        <div className="flex shrink-0 items-center gap-2">
          <IconButton ariaLabel={previousLabel} icon={<ChevronLeft aria-hidden="true" size={18} strokeWidth={1.8} />} variant="outline" onClick={() => scrollBy(-1)} />
          <IconButton ariaLabel={nextLabel} icon={<ChevronRight aria-hidden="true" size={18} strokeWidth={1.8} />} variant="outline" onClick={() => scrollBy(1)} />
        </div>
      </div>
      <ul ref={listRef} className="flex max-w-full snap-x gap-4 overflow-x-auto pb-2" tabIndex={0}>
        {items.map((item, index) => (
          <li key={index} className="min-w-[min(82vw,18rem)] max-w-[18rem] snap-start">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
