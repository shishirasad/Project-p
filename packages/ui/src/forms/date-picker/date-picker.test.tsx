import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DatePicker } from "./date-picker";

describe("DatePicker", () => {
  it("uses native date input", () => {
    render(<DatePicker label="Preferred delivery date" />);
    expect(screen.getByLabelText("Preferred delivery date")).toHaveAttribute("type", "date");
  });
});