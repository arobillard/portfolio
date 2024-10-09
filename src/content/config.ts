import { defineCollection, reference, z } from "astro:content";

const caseStudyCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
    roles: z.array(reference("roles")),
    technologies: z.array(reference("technologies")),
  }),
});

const technologiesCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    url: z.string(),
  }),
});

const rolesCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const coolStuffCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
    categories: z.array(reference("cool-stuff-categories")),
  }),
});

const coolStuffCategories = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    order: z.number(),
    description: z.string(),
  }),
});

export const collections = {
  "case-studies": caseStudyCollection,
  technologies: technologiesCollection,
  roles: rolesCollection,
  "cool-stuff": coolStuffCollection,
  "cool-stuff-categories": coolStuffCategories,
};
