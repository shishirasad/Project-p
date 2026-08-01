import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";
import type { LayoutBreakpoint, LayoutSide, LayoutWidth } from "../types";
import { getSidebarWidthClass, sidebarCollapseClasses } from "../utils";

export type SidebarLayoutProps = HTMLAttributes<HTMLDivElement> & {
  sidebar: ReactNode;
  children: ReactNode;
  side?: LayoutSide;
  sidebarWidth?: LayoutWidth;
  collapseAt?: LayoutBreakpoint;
  stickySidebar?: boolean;
  sidebarLabel?: string;
};

export function SidebarLayout({ sidebar, children, side = "start", sidebarWidth = "md", collapseAt = "md", stickySidebar = false, sidebarLabel, className, ...props }: SidebarLayoutProps) {
  return (
    <div className={cn("grid gap-8", sidebarCollapseClasses[collapseAt], getSidebarWidthClass(side, sidebarWidth, collapseAt), className)} {...props}>
      <aside aria-label={sidebarLabel} className={cn("min-w-0", side === "end" && "md:order-2", stickySidebar && "md:sticky md:top-[calc(var(--nav-height-desktop)+24px)] md:self-start")}>
        {sidebar}
      </aside>
      <div className="min-w-0">{children}</div>
    </div>
  );
}