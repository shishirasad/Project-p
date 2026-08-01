import type { NavigationAction, NavigationItem } from "../types";

export function getNavigationItemKey(item: NavigationItem, index: number) {
  return item.id ?? item.href ?? `${index}`;
}

export function getNavigationActionKey(action: NavigationAction, index: number) {
  return action.id ?? action.href ?? action.label ?? `${index}`;
}

export function isNavigationItemActive(item: NavigationItem, activeHref?: string) {
  return Boolean(activeHref && item.href && item.href === activeHref);
}

export function isNavigationActionActive(action: NavigationAction, activeHref?: string) {
  return Boolean(activeHref && action.href && action.href === activeHref);
}
