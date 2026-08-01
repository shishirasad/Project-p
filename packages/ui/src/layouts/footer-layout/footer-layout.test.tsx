import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { FooterLayout } from "./footer-layout";
import { footerColumns, sampleFooterBrand } from "../story-data";

describe("FooterLayout", () => {
  it("renders brand, navigation columns, and legal content", () => {
    render(<FooterLayout ariaLabel="Footer" brand={sampleFooterBrand} columns={footerColumns} legal="All rights reserved" />);
    expect(screen.getByRole("contentinfo", { name: "Footer" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Faris" })).toHaveAttribute("href", "#faris");
    expect(screen.getByText("All rights reserved")).toBeInTheDocument();
  });
});