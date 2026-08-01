import { Stack } from "./stack";

export default { title: "Primitives/Stack", component: Stack, args: { children: ["One", "Two", "Three"].map((item) => <span key={item}>{item}</span>) } };
export const Column = {};
export const Row = { args: { direction: "row", align: "center" } };
