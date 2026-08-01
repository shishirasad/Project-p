import { Badge } from "./badge";

export default { title: "Primitives/Badge", component: Badge, args: { children: "New Arrival" } };
export const Default = {};
export const Accent = { args: { tone: "accent", children: "Faris" } };
export const Success = { args: { tone: "success", children: "In Stock" } };
