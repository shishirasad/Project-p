import { Pagination } from "./pagination";

const labels = {
  previous: "Previous page",
  next: "Next page",
  page: (page: number) => `Go to page ${page}`,
  currentPage: (page: number) => `Current page, page ${page}`
};

export default {
  title: "Navigation/Pagination",
  component: Pagination,
  args: {
    page: 4,
    pageCount: 12,
    labels
  }
};

export const Default = {};
export const WithLinks = { args: { getPageHref: (page: number) => `/collection?page=${page}` } };
export const FirstPage = { args: { page: 1, pageCount: 5 } };
