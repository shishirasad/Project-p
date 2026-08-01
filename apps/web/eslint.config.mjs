import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const config = [
  {
    ignores: [".next/**", "storybook-static/**", "node_modules/**"]
  },
  ...nextVitals,
  ...nextTs
];

export default config;