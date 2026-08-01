import type { HTMLAttributes, ReactNode } from "react";
import { StatusBadge } from "../../feedback/status-badge";
import type { CommerceTone } from "../types";

export type StockIndicatorProps = HTMLAttributes<HTMLSpanElement> & {
  label: ReactNode;
  tone?: CommerceTone;
};

export function StockIndicator({ label, tone = "neutral", ...props }: StockIndicatorProps) {
  return <StatusBadge tone={tone === "accent" ? "info" : tone} label={label} showDot {...props} />;
}
