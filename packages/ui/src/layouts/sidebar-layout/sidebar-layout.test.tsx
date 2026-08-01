import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SidebarLayout } from "./sidebar-layout";

describe("SidebarLayout", () => {
  it("renders sidebar and content slots", () => {
    render(<SidebarLayout sidebarLabel="Filters" sidebar={<div>Sidebar</div>}><div>Content</div></SidebarLayout>);
    expect(screen.getByRole("complementary", { name: "Filters" })).toHaveTextContent("Sidebar");
    expect(screen.getByText("Content")).toBeInTheDocument();
  });
});