import { defineCollection, z } from "astro:content";

const fotos = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    author: z.string(),
    date: z.date(),
    draft: z.boolean(),
    category: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {fotos};