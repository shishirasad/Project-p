"use client";

import { useId, useRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";
import { useFocusTrap, useScrollLock } from "../hooks";

export type BottomSheetProps = Omit<HTMLAttributes<HTMLDivElement>, "title"> & {
  isOpen: boolean;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  closeLabel: string;
  dismissible?: boolean;
  lockScroll?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
};

export function BottomSheet({ isOpen, title, description, children, footer, closeLabel, dismissible = true, lockScroll = true, onOpenChange, className, ...props }: BottomSheetProps) {
  const titleId = useId();
  const descriptionId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const close = () => onOpenChange?.(false);
  useScrollLock(isOpen && lockScroll);
  useFocusTrap(panelRef, isOpen, close, dismissible);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[var(--z-drawer)] flex min-h-dvh items-end bg-[var(--color-text)]/35 p-[var(--gutter)] text-[var(--color-text)] sm:items-center sm:justify-center" onMouseDown={(event) => { if (dismissible && event.target === event.currentTarget) close(); }}>
      <section ref={panelRef} tabIndex={-1} role="dialog" aria-modal="true" aria-labelledby={titleId} aria-describedby={description ? descriptionId : undefined} className={cn("grid max-h-[85dvh] w-full max-w-[var(--container-reading)] gap-4 overflow-y-auto rounded-t-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)] sm:rounded-[var(--radius-lg)]", className)} {...props}>
        <div aria-hidden="true" className="mx-auto h-1 w-10 rounded-full bg-[var(--color-border)] sm:hidden" />
        <div className="flex min-h-11 items-start justify-between gap-4">
          <div className="grid gap-2">
            <h2 id={titleId} className="text-base font-medium text-[var(--color-text)]">{title}</h2>
            {description ? <p id={descriptionId} className="text-sm leading-6 text-[var(--color-text-muted)]">{description}</p> : null}
          </div>
          <button type="button" className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[var(--radius-sm)] text-sm text-[var(--color-text)] transition-colors hover:bg-[var(--color-hover-surface)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]" onClick={close}>
            <span className="sr-only">{closeLabel}</span>
            <span aria-hidden="true">x</span>
          </button>
        </div>
        {children ? <div className="text-sm leading-6 text-[var(--color-text-muted)]">{children}</div> : null}
        {footer ? <div className="flex flex-wrap items-center justify-end gap-3 border-t border-[var(--color-border)] pt-4">{footer}</div> : null}
      </section>
    </div>
  );
}