import { MegaMenu } from "./mega-menu";

const columns = [
  { title: "House", items: [{ label: "The Collection", href: "/collection", description: "Timeless essentials" }, { label: "New Arrivals", href: "/new", description: "Latest releases" }] },
  { title: "Faris", items: [{ label: "Shirts", href: "/faris/shirts" }, { label: "Polo", href: "/faris/polo" }, { label: "Trousers", href: "/faris/trousers" }] },
  { title: "Laaj", items: [{ label: "Dresses", href: "/laaj/dresses" }, { label: "Co-ords", href: "/laaj/co-ords" }, { label: "Occasion", href: "/laaj/occasion" }] }
];

export default {
  title: "Navigation/MegaMenu",
  component: MegaMenu,
  args: {
    columns,
    featuredItem: { eyebrow: "Campaign", label: "Old Money Polo Collection", href: "/campaign/old-money", description: "Quiet luxury essentials" }
  }
};

export const Default = {};
export const WithoutFeatured = { args: { featuredItem: undefined } };
