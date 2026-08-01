"use client";

import { useId, useRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";
import type { OverlaySize } from "../types";
import { useFocusTrap, useScrollLock } from "../hooks";
import { overlaySizeClasses } from "../utils";

export type DialogProps = Omit<HTMLAttributes<HTMLDivElement>, "title"> & {
  isOpen: boolean;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  actions?: ReactNode;
  closeLabel: string;
  size?: OverlaySize;
  role?: "dialog" | "alertdialog";
  dismissible?: boolean;
  lockScroll?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
};

export function Dialog({ isOpen, title, description, children, actions, closeLabel, size = "sm", role = "dialog", dismissible = true, lockScroll = true, onOpenChange, className, ...props }: DialogProps) {
  const titleId = useId();
  const descriptionId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const close = () => onOpenChange?.(false);
  useScrollLock(isOpen && lockScroll);
  useFocusTrap(panelRef, isOpen, close, dismissible);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[var(--z-modal)] grid min-h-dvh place-items-center overflow-y-auto bg-[var(--color-text)]/35 p-[var(--gutter)] text-[var(--color-text)]" onMouseDown={(event) => { if (dismissible && event.target === event.currentTarget) close(); }}>
      <div ref={panelRef} tabIndex={-1} role={role} aria-modal="true" aria-labelledby={titleId} aria-describedby={description ? descriptionId : undefined} className={cn("grid w-full gap-4 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]", overlaySizeClasses[size], className)} {...props}>
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
        {actions ? <div className="flex flex-wrap items-center justify-end gap-3 pt-2">{actions}</div> : null}
      </div>
    </div>
  );
}