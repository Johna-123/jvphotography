import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://jvphotography.pages.dev",
  integrations: [
    sitemap({
      filter: (page) =>
        page !== "https://jvphotography.pages.dev/admin/add_image" &&
        page !== "https://jvphotography.pages.dev/admin/add_image/" &&
        page !== "https://jvphotography.pages.dev/admin/add_folder" &&
        page !== "https://jvphotography.pages.dev/admin/add_folder/",
    }),
  ],
});
