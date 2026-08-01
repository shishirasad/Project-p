"use client";

import type { HTMLAttributes } from "react";
import { useMemo, useState } from "react";
import { cn } from "../../lib/cn";
import { SearchInput } from "../../forms/search-input";
import type { CommandPaletteCommand, CommandPaletteGroup } from "../types";

export type CommandPaletteProps = Omit<HTMLAttributes<HTMLDivElement>, "onChange"> & {
  isOpen: boolean;
  title: string;
  label: string;
  closeLabel: string;
  clearLabel: string;
  placeholder?: string;
  query?: string;
  defaultQuery?: string;
  groups: CommandPaletteGroup[];
  emptyMessage?: string;
  onClose?: () => void;
  onQueryChange?: (query: string) => void;
  onCommandSelect?: (command: CommandPaletteCommand) => void;
};

export function CommandPalette({ isOpen, title, label, closeLabel, clearLabel, placeholder, query, defaultQuery = "", groups, emptyMessage, onClose, onQueryChange, onCommandSelect, className, ...props }: CommandPaletteProps) {
  const [internalQuery, setInternalQuery] = useState(defaultQuery);
  const currentQuery = query ?? internalQuery;
  const normalizedQuery = currentQuery.trim().toLowerCase();
  const filteredGroups = useMemo(() => groups.map((group) => ({
    ...group,
    commands: group.commands.filter((command) => {
      if (!normalizedQuery) return true;
      const labelText = typeof command.label === "string" ? command.label : "";
      const descriptionText = typeof command.description === "string" ? command.description : "";
      return `${labelText} ${descriptionText}`.toLowerCase().includes(normalizedQuery);
    })
  })).filter((group) => group.commands.length > 0), [groups, normalizedQuery]);

  function updateQuery(nextQuery: string) {
    if (query === undefined) setInternalQuery(nextQuery);
    onQueryChange?.(nextQuery);
  }

  function selectCommand(command: CommandPaletteCommand) {
    if (command.disabled) return;
    command.onSelect?.();
    onCommandSelect?.(command);
  }

  if (!isOpen) return null;

  return (
    <div className={cn("fixed inset-0 z-[var(--z-command)] bg-[var(--color-background)]/95 p-[var(--gutter)] text-[var(--color-text)] backdrop-blur-md", className)} role="dialog" aria-modal="true" aria-labelledby="command-palette-title" onKeyDown={(event) => { if (event.key === "Escape") onClose?.(); }} {...props}>
      <div className="mx-auto grid max-w-[var(--container-reading)] gap-4 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
        <div className="flex min-h-11 items-center justify-between gap-4">
          <h2 id="command-palette-title" className="text-base font-medium text-[var(--color-text)]">{title}</h2>
          <button type="button" className="inline-flex min-h-11 items-center justify-center rounded-[var(--radius-sm)] px-4 text-sm text-[var(--color-text)] transition-colors hover:bg-[var(--color-hover-surface)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]" onClick={onClose}>{closeLabel}</button>
        </div>
        <SearchInput label={label} placeholder={placeholder} value={currentQuery} clearLabel={clearLabel} onClear={() => updateQuery("")} onChange={(event) => updateQuery(event.currentTarget.value)} />
        <div className="grid gap-4" aria-label="Commands">
          {filteredGroups.length > 0 ? filteredGroups.map((group, groupIndex) => (
            <section key={group.id ?? `${groupIndex}`} aria-labelledby={`command-group-${group.id ?? groupIndex}`} className="grid gap-2">
              <h3 id={`command-group-${group.id ?? groupIndex}`} className="text-xs uppercase tracking-[0.18em] text-[var(--color-text)]">{group.title}</h3>
              <div className="grid gap-1">
                {group.commands.map((command) => (
                  <button key={command.id} type="button" disabled={command.disabled} className="flex min-h-11 items-center justify-between gap-4 rounded-[var(--radius-sm)] px-3 py-2 text-left text-sm text-[var(--color-text)] transition-colors hover:bg-[var(--color-hover-surface)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] disabled:pointer-events-none disabled:opacity-50" onClick={() => selectCommand(command)}>
                    <span className="grid gap-1">
                      <span className="font-medium">{command.label}</span>
                      {command.description ? <span className="text-sm text-[var(--color-text-muted)]">{command.description}</span> : null}
                    </span>
                    {command.shortcut ? <span className="text-xs uppercase tracking-[0.14em] text-[var(--color-text-muted)]">{command.shortcut}</span> : null}
                  </button>
                ))}
              </div>
            </section>
          )) : emptyMessage ? <p className="text-sm text-[var(--color-text-muted)]">{emptyMessage}</p> : null}
        </div>
      </div>
    </div>
  );
}

