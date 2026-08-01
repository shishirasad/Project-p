import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PromoCodeInput } from "./promo-code-input";

describe("PromoCodeInput", () => {
  it("renders with an accessible label", () => {
    render(<PromoCodeInput label="Promo code" />);
    expect(screen.getByLabelText("Promo code")).toBeInTheDocument();
  });
});