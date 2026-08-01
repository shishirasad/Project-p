import { Text } from "./text";

export default { title: "Primitives/Text", component: Text, args: { children: "Quiet luxury is intentional and timeless." } };
export const Default = {};
export const Muted = { args: { tone: "muted" } };
export const Accent = { args: { tone: "accent" } };
