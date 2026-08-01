import { PageShell } from "./page-shell";
import { sampleHeader } from "../story-data";

export default {
  title: "Layouts/PageShell",
  component: PageShell,
  args: {
    header: sampleHeader,
    footer: <div className="border-t border-[var(--color-border)] px-[var(--gutter)] py-6 text-sm text-[var(--color-text-muted)]">Footer slot</div>,
    skipLinkLabel: "Skip to content",
    children: <div className="px-[var(--gutter)] py-16">Main content slot</div>
  }
};

export const Default = {};