import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { MegaMenu } from "./mega-menu";

const columns = [{ title: "Faris", items: [{ label: "Shirts", href: "/faris/shirts" }, { label: "Draft" }] }];

describe("MegaMenu", () => {
  it("renders grouped navigation links", () => {
    render(<MegaMenu columns={columns} />);
    expect(screen.getByRole("link", { name: "Shirts" })).toHaveAttribute("href", "/faris/shirts");
  });

  it("notifies button item selection", () => {
    const onItemSelect = vi.fn();
    render(<MegaMenu columns={columns} onItemSelect={onItemSelect} />);
    fireEvent.click(screen.getByRole("button", { name: "Draft" }));
    expect(onItemSelect).toHaveBeenCalledWith({ label: "Draft" });
  });
});
