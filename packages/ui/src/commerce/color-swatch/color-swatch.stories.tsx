import { ColorSwatch } from "./color-swatch";
import { colorOptions } from "../story-data";

export default {
  title: "Commerce/ColorSwatch",
  component: ColorSwatch,
  args: {
    options: colorOptions,
    defaultValue: "black",
    ariaLabel: "Choose color"
  }
};

export const Default = {};
export const WithLabels = { args: { showLabels: true } };
