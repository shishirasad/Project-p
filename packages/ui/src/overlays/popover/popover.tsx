"use client";

import { cloneElement, isValidElement, useId, useRef } from "react";
import type { HTMLAttributes, ReactElement, ReactNode } from "react";
import { cn } from "../../lib/cn";
import type { FloatingPlacement } from "../types";
import { useControllableOpen } from "../hooks";
import { floatingPlacementClasses } from "../utils";

export type PopoverProps = Omit<HTMLAttributes<HTMLDivElement>, "title"> & {
  trigger: ReactElement<{ onClick?: () => void; "aria-expanded"?: boolean; "aria-controls"?: string }>;
  title?: ReactNode;
  children: ReactNode;
  isOpen?: boolean;
  defaultOpen?: boolean;
  placement?: FloatingPlacement;
  onOpenChange?: (isOpen: boolean) => void;
};

export function Popover({ trigger, title, children, isOpen, defaultOpen = false, placement = "bottom", onOpenChange, className, ...props }: PopoverProps) {
  const contentId = useId();
  const titleId = useId();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { open, setOpen } = useControllableOpen({ isOpen, defaultOpen, onOpenChange });
  const triggerElement = isValidElement(trigger) ? cloneElement(trigger, {
    onClick: () => {
      trigger.props.onClick?.();
      setOpen(!open);
    },
    "aria-expanded": open,
    "aria-controls": contentId
  }) : trigger;

  return (
    <div ref={wrapperRef} className="relative inline-flex" onKeyDown={(event) => { if (event.key === "Escape") setOpen(false); }}>
      {triggerElement}
      {open ? (
        <div id={contentId} role="dialog" aria-labelledby={title ? titleId : undefined} className={cn("absolute z-[var(--z-modal)] grid min-w-64 max-w-xs gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 text-sm leading-6 text-[var(--color-text-muted)] shadow-sm", floatingPlacementClasses[placement], className)} {...props}>
          {title ? <p id={titleId} className="text-sm font-medium text-[var(--color-text)]">{title}</p> : null}
          <div>{children}</div>
        </div>
      ) : null}
    </div>
  );
}