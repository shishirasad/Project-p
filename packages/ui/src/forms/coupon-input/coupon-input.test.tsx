import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CouponInput } from "./coupon-input";

describe("CouponInput", () => {
  it("disables autocorrect and spellcheck", () => {
    render(<CouponInput label="Coupon code" />);
    const input = screen.getByLabelText("Coupon code");
    expect(input).toHaveAttribute("autocorrect", "off");
    expect(input).toHaveAttribute("spellcheck", "false");
  });
});