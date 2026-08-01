"use client";

import { useEffect, useState } from "react";
import type { RefObject } from "react";

const focusableSelector = [
  "a[href]",
  "button:not([disabled])",
  "textarea:not([disabled])",
  "input:not([disabled]):not([type='hidden'])",
  "select:not([disabled])",
  "[tabindex]:not([tabindex='-1'])"
].join(",");

export function useControllableOpen({ isOpen, defaultOpen = false, onOpenChange }: { isOpen?: boolean; defaultOpen?: boolean; onOpenChange?: (isOpen: boolean) => void }) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const open = isOpen ?? internalOpen;

  function setOpen(nextOpen: boolean) {
    if (isOpen === undefined) setInternalOpen(nextOpen);
    onOpenChange?.(nextOpen);
  }

  return { open, setOpen };
}

export function useScrollLock(active: boolean) {
  useEffect(() => {
    if (!active) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [active]);
}

export function useFocusTrap(ref: RefObject<HTMLElement | null>, active: boolean, onDismiss?: () => void, dismissible = true) {
  useEffect(() => {
    if (!active) return;
    const root = ref.current;
    if (!root) return;
    const trapRoot = root;
    const previousActiveElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const focusableElements = () => Array.from(trapRoot.querySelectorAll<HTMLElement>(focusableSelector)).filter((element) => element.offsetParent !== null || element === document.activeElement);
    const firstFocusable = focusableElements()[0] ?? trapRoot;

    window.setTimeout(() => firstFocusable.focus(), 0);

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && dismissible) {
        event.preventDefault();
        onDismiss?.();
        return;
      }

      if (event.key !== "Tab") return;
      const elements = focusableElements();
      if (elements.length === 0) {
        event.preventDefault();
        trapRoot.focus();
        return;
      }
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previousActiveElement?.focus();
    };
  }, [active, dismissible, onDismiss, ref]);
}