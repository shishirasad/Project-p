import { SidebarLayout } from "./sidebar-layout";

export default {
  title: "Layouts/SidebarLayout",
  component: SidebarLayout,
  args: {
    sidebarLabel: "Filters",
    sidebar: <div className="rounded-[var(--radius-sm)] border border-[var(--color-border)] p-4 text-sm text-[var(--color-text-muted)]">Sidebar slot</div>,
    children: <div className="rounded-[var(--radius-sm)] border border-[var(--color-border)] p-6 text-sm text-[var(--color-text)]">Content slot</div>
  }
};

export const Default = {};
export const EndSidebar = { args: { side: "end" } };
export const Sticky = { args: { stickySidebar: true } };