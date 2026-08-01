"use client";

import { cloneElement, isValidElement, useId } from "react";
import type { HTMLAttributes, ReactElement, ReactNode } from "react";
import { cn } from "../../lib/cn";
import type { FloatingPlacement } from "../types";
import { useControllableOpen } from "../hooks";
import { floatingPlacementClasses } from "../utils";

export type TooltipProps = Omit<HTMLAttributes<HTMLDivElement>, "content"> & {
  trigger: ReactElement<{ onFocus?: () => void; onBlur?: () => void; onMouseEnter?: () => void; onMouseLeave?: () => void; "aria-describedby"?: string }>;
  content: ReactNode;
  isOpen?: boolean;
  defaultOpen?: boolean;
  placement?: FloatingPlacement;
  onOpenChange?: (isOpen: boolean) => void;
};

export function Tooltip({ trigger, content, isOpen, defaultOpen = false, placement = "top", onOpenChange, className, ...props }: TooltipProps) {
  const tooltipId = useId();
  const { open, setOpen } = useControllableOpen({ isOpen, defaultOpen, onOpenChange });
  const triggerElement = isValidElement(trigger) ? cloneElement(trigger, {
    onFocus: () => {
      trigger.props.onFocus?.();
      setOpen(true);
    },
    onBlur: () => {
      trigger.props.onBlur?.();
      setOpen(false);
    },
    onMouseEnter: () => {
      trigger.props.onMouseEnter?.();
      setOpen(true);
    },
    onMouseLeave: () => {
      trigger.props.onMouseLeave?.();
      setOpen(false);
    },
    "aria-describedby": open ? tooltipId : trigger.props["aria-describedby"]
  }) : trigger;

  return (
    <span className="relative inline-flex">
      {triggerElement}
      {open ? <span id={tooltipId} role="tooltip" className={cn("absolute z-[var(--z-toast)] max-w-xs rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-text)] px-3 py-2 text-xs leading-5 text-[var(--color-background)] shadow-sm", floatingPlacementClasses[placement], className)} {...props}>{content}</span> : null}
    </span>
  );
}