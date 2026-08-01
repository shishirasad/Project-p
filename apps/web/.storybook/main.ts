import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  stories: ["../../../packages/ui/src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-a11y"],
  framework: {
    name: "@storybook/nextjs-vite",
    options: {}
  },
  staticDirs: ["../public"],
  viteFinal: async (viteConfig) => {
    viteConfig.build ??= {};
    viteConfig.build.rollupOptions ??= {};

    const existingOnWarn = viteConfig.build.rollupOptions.onwarn;

    viteConfig.build.rollupOptions.onwarn = (warning, warn) => {
      const message = typeof warning.message === "string" ? warning.message : "";

      if (warning.code === "MODULE_LEVEL_DIRECTIVE" && message.includes("use client")) return;
      if (warning.code === "SOURCEMAP_ERROR" && message.includes("Can't resolve original location")) return;

      if (existingOnWarn) {
        existingOnWarn(warning, warn);
        return;
      }

      warn(warning);
    };

    return viteConfig;
  }
};

export default config;