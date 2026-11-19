// @ts-check
import { defineConfig } from "astro/config";
import { satteri } from "@astrojs/markdown-satteri";
import { mdastReadingTimePlugin } from "./src/utils/global.js";

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["images.unsplash.com", "plus.unsplash.com"],
    remotePatterns: [{ protocol: "https" }],
  },
  markdown: {
    processor: satteri({
      mdastPlugins: [mdastReadingTimePlugin],
    }),
  },
});
