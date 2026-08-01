"use client";

import type { HTMLAttributes } from "react";
import { useState } from "react";
import { cn } from "../../lib/cn";
import { SearchInput } from "../../forms/search-input";
import type { SearchOverlaySuggestion } from "../types";

export type SearchOverlayProps = Omit<HTMLAttributes<HTMLDivElement>, "onChange"> & {
  isOpen: boolean;
  title: string;
  label: string;
  placeholder?: string;
  closeLabel: string;
  clearLabel?: string;
  query?: string;
  defaultQuery?: string;
  suggestions?: SearchOverlaySuggestion[];
  emptyMessage?: string;
  onClose?: () => void;
  onQueryChange?: (query: string) => void;
  onSuggestionSelect?: (suggestion: SearchOverlaySuggestion) => void;
};

const suggestionClasses = "inline-flex min-h-11 w-full flex-col justify-center rounded-[var(--radius-sm)] px-3 py-2 text-left transition-colors hover:bg-[var(--color-hover-surface)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]";

function SuggestionItem({ suggestion, onSuggestionSelect }: { suggestion: SearchOverlaySuggestion; onSuggestionSelect?: (suggestion: SearchOverlaySuggestion) => void }) {
  const content = (
    <>
      <span className="text-sm font-medium text-[var(--color-text)]">{suggestion.label}</span>
      {suggestion.description ? <span className="mt-1 text-sm text-[var(--color-text-muted)]">{suggestion.description}</span> : null}
      {suggestion.badge ? <span className="mt-1 text-xs uppercase tracking-[0.14em] text-[var(--color-text)]">{suggestion.badge}</span> : null}
    </>
  );

  if (suggestion.href && !suggestion.disabled) {
    return <a className={suggestionClasses} href={suggestion.href} onClick={() => onSuggestionSelect?.(suggestion)}>{content}</a>;
  }

  return <button type="button" className={cn(suggestionClasses, suggestion.disabled && "pointer-events-none opacity-50")} disabled={suggestion.disabled} onClick={() => onSuggestionSelect?.(suggestion)}>{content}</button>;
}

export function SearchOverlay({ isOpen, title, label, placeholder, closeLabel, clearLabel, query, defaultQuery = "", suggestions = [], emptyMessage, onClose, onQueryChange, onSuggestionSelect, className, ...props }: SearchOverlayProps) {
  const [internalQuery, setInternalQuery] = useState(defaultQuery);
  const currentQuery = query ?? internalQuery;

  function updateQuery(nextQuery: string) {
    if (query === undefined) setInternalQuery(nextQuery);
    onQueryChange?.(nextQuery);
  }

  if (!isOpen) return null;

  return (
    <div className={cn("fixed inset-0 z-[var(--z-command)] overflow-y-auto bg-[var(--color-background)] p-[var(--gutter)] text-[var(--color-text)]", className)} role="dialog" aria-modal="true" aria-labelledby="search-overlay-title" onKeyDown={(event) => { if (event.key === "Escape") onClose?.(); }} {...props}>
      <div className="mx-auto grid max-w-[var(--container-reading)] gap-6 py-10">
        <div className="flex min-h-11 items-center justify-between gap-4">
          <h2 id="search-overlay-title" className="text-lg font-medium text-[var(--color-text)]">{title}</h2>
          <button type="button" className="inline-flex min-h-11 items-center justify-center rounded-[var(--radius-sm)] px-4 text-sm text-[var(--color-text)] transition-colors hover:bg-[var(--color-hover-surface)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]" onClick={onClose}>{closeLabel}</button>
        </div>
        <SearchInput label={label} placeholder={placeholder} value={currentQuery} clearLabel={clearLabel} onClear={() => updateQuery("")} onChange={(event) => updateQuery(event.currentTarget.value)} />
        <div className="grid gap-2" aria-label="Search suggestions">
          {suggestions.length > 0 ? suggestions.map((suggestion, index) => <SuggestionItem key={suggestion.id ?? suggestion.href ?? `${index}`} suggestion={suggestion} onSuggestionSelect={onSuggestionSelect} />) : emptyMessage ? <p className="text-sm text-[var(--color-text-muted)]">{emptyMessage}</p> : null}
        </div>
      </div>
    </div>
  );
}
