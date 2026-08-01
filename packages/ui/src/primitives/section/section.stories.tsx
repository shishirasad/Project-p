import { Section } from "./section";

export default { title: "Primitives/Section", component: Section, args: { children: "Section content" } };
export const Default = {};
export const Large = { args: { spacing: "lg" } };
