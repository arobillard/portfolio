import { defineCollection, reference, z } from "astro:content";

const caseStudyCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
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

export const collections = {
  "case-studies": caseStudyCollection,
  technologies: technologiesCollection,
  roles: rolesCollection,
};
