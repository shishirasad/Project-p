import { Heading } from "./heading";

export default { title: "Primitives/Heading", component: Heading, args: { children: "The House of Timeless Fashion" } };
export const Default = {};
export const Hero = { args: { size: "xl", as: "h1" } };
export const Accent = { args: { tone: "accent" } };
