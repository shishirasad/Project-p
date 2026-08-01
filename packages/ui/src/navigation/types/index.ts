import type { ReactNode } from "react";

export type NavigationItem = {
  id?: string;
  label: ReactNode;
  href?: string;
  description?: ReactNode;
  eyebrow?: ReactNode;
  badge?: ReactNode;
  disabled?: boolean;
  isExternal?: boolean;
  items?: NavigationItem[];
  analyticsId?: string;
};

export type NavigationAction = {
  id?: string;
  label: string;
  href?: string;
  icon?: ReactNode;
  badge?: ReactNode;
  disabled?: boolean;
  onPress?: () => void;
  analyticsId?: string;
};

export type MegaMenuColumn = {
  id?: string;
  title: ReactNode;
  items: NavigationItem[];
};

export type TabItem = {
  value: string;
  label: ReactNode;
  disabled?: boolean;
  badge?: ReactNode;
};

export type PaginationLabelSet = {
  previous: string;
  next: string;
  page: (page: number) => string;
  currentPage: (page: number) => string;
};

export type SearchOverlaySuggestion = {
  id?: string;
  label: ReactNode;
  href?: string;
  description?: ReactNode;
  badge?: ReactNode;
  disabled?: boolean;
};

export type CommandPaletteCommand = {
  id: string;
  label: ReactNode;
  description?: ReactNode;
  shortcut?: ReactNode;
  disabled?: boolean;
  onSelect?: () => void;
};

export type CommandPaletteGroup = {
  id?: string;
  title: ReactNode;
  commands: CommandPaletteCommand[];
};
