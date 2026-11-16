// src/content.config.ts
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    publishedAt: z.string(),
    author: z.string(),
    image: z.string(),
    category: z.string(),
    isPinned: z.boolean(),
    excerpt: z.string(),
  }),
});

export const collections = { blog };
