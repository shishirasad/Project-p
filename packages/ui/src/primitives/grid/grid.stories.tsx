import { Grid } from "./grid";

export default { title: "Primitives/Grid", component: Grid, args: { children: ["A", "B", "C"].map((item) => <div key={item}>{item}</div>) } };
export const Three = {};
export const Four = { args: { columns: 4 } };
