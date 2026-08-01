import { SearchOverlay } from "./search-overlay";

const suggestions = [
  { label: "Linen shirts", href: "/search?q=linen-shirts", description: "Popular in Faris" },
  { label: "Modest dresses", href: "/search?q=modest-dresses", description: "Popular in Laaj" },
  { label: "Polo collection", href: "/search?q=polo", badge: "Campaign" }
];

export default {
  title: "Navigation/SearchOverlay",
  component: SearchOverlay,
  args: {
    isOpen: true,
    title: "Search Porsion Studio",
    label: "Search",
    placeholder: "Search products, collections, journal",
    closeLabel: "Close",
    clearLabel: "Clear search",
    defaultQuery: "linen",
    suggestions
  }
};

export const Default = {};
export const Empty = { args: { suggestions: [], defaultQuery: "", emptyMessage: "No suggestions yet." } };
