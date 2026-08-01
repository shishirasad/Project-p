import { ResponsiveSlot } from "./responsive-slot";

export default {
  title: "Layouts/ResponsiveSlot",
  component: ResponsiveSlot,
  args: {
    children: <div className="rounded-[var(--radius-sm)] border border-[var(--color-border)] p-4 text-sm text-[var(--color-text)]">Responsive content slot</div>
  }
};

export const Default = {};
export const MobileOnly = { args: { show: "mobile" } };
export const DesktopOnly = { args: { show: "desktop" } };