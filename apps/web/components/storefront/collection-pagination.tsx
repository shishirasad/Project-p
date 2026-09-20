"use client";

import { Pagination } from "@porsion/ui";

export type CollectionPaginationProps = {
  page: number;
  pageCount: number;
  brand: "all" | "faris" | "laaj" | "labannya";
  category: string;
  sort: "featured" | "newest" | "price-low";
};

export function CollectionPagination({ page, pageCount, brand, category, sort }: CollectionPaginationProps) {
  const getPageHref = (nextPage: number) => {
    const params = new URLSearchParams();
    if (brand !== "all") params.set("brand", brand);
    if (category !== "all") params.set("category", category);
    if (sort !== "featured") params.set("sort", sort);
    if (nextPage > 1) params.set("page", String(nextPage));
    return params.size ? `/collection?${params.toString()}` : "/collection";
  };

  return (
    <Pagination
      page={page}
      pageCount={pageCount}
      labels={{
        previous: "Previous collection page",
        next: "Next collection page",
        page: (value) => `Go to page ${value}`,
        currentPage: (value) => `Current page, ${value}`
      }}
      getPageHref={getPageHref}
    />
  );
}
