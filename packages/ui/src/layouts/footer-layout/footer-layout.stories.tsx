import { FooterLayout } from "./footer-layout";
import { footerColumns, sampleFooterBrand, sampleSocial } from "../story-data";

export default {
  title: "Layouts/FooterLayout",
  component: FooterLayout,
  args: {
    ariaLabel: "Footer",
    brand: sampleFooterBrand,
    utility: "Quiet luxury fashion house from Bangladesh.",
    columns: footerColumns,
    social: sampleSocial,
    legal: "Porsion Studio. All rights reserved."
  }
};

export const Default = {};
export const Minimal = { args: { columns: [], social: undefined, legal: undefined } };