import type { Preview } from "@storybook/nextjs-vite";
import "../app/globals.css";

const preview: Preview = {
  globalTypes: {
    brandTheme: {
      description: "Porsion Studio brand theme",
      defaultValue: "house",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          { value: "house", title: "House" },
          { value: "faris", title: "FARIS" },
          { value: "laaj", title: "LAAJ" },
          { value: "labannya", title: "LABANNYA" },
          { value: "campaign", title: "Campaign" }
        ]
      }
    }
  },
  decorators: [
    (Story, context) => (
      <div
        data-brand={context.globals.brandTheme ?? "house"}
        className="min-h-screen bg-[var(--color-background)] p-8 text-[var(--color-text)]"
      >
        <Story />
      </div>
    )
  ],
  parameters: {
    a11y: {
      test: "todo"
    },
    controls: {
      expanded: true
    },
    layout: "centered"
  }
};

export default preview;
