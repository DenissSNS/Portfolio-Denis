import { defineCollection, z } from "astro:content";

// mettre ici les paramètres des pages blog

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    heroImage: z.string().optional(),
    // Transform string to Date object
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    title: z.string(),
    tags: z.string(),
    type: z.string(),
  }),
});

export const collections = { blog };
