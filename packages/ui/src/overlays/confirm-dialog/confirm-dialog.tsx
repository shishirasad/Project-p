"use client";

import type { ReactNode } from "react";
import { Button } from "../../primitives/button";
import { Dialog } from "../dialog";
import type { ConfirmTone, OverlaySize } from "../types";

export type ConfirmDialogProps = {
  isOpen: boolean;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  confirmLabel: ReactNode;
  cancelLabel: ReactNode;
  closeLabel: string;
  tone?: ConfirmTone;
  size?: OverlaySize;
  isConfirmLoading?: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
  onOpenChange?: (isOpen: boolean) => void;
};

export function ConfirmDialog({ isOpen, title, description, children, confirmLabel, cancelLabel, closeLabel, tone = "neutral", size = "sm", isConfirmLoading = false, onConfirm, onCancel, onOpenChange }: ConfirmDialogProps) {
  function cancel() {
    onCancel?.();
    onOpenChange?.(false);
  }

  function confirm() {
    onConfirm?.();
  }

  return (
    <Dialog
      isOpen={isOpen}
      title={title}
      description={description}
      closeLabel={closeLabel}
      size={size}
      role={tone === "danger" ? "alertdialog" : "dialog"}
      onOpenChange={onOpenChange}
      actions={(
        <>
          <Button variant="outline" onClick={cancel}>{cancelLabel}</Button>
          <Button variant={tone === "danger" ? "danger" : "primary"} isLoading={isConfirmLoading} onClick={confirm}>{confirmLabel}</Button>
        </>
      )}
    >
      {children}
    </Dialog>
  );
}