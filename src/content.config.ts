import { glob } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";

const caseStudyCollection = defineCollection({
  // type: "content",
  loader: glob({ pattern: "**/*.md", base: "./src/content/case-studies" }),
  schema: z.object({
    title: z.string(),
    shortDesc: z.string(),
    description: z.string(),
    order: z.number(),
    active: z.boolean(),
    featureImg: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    externalLink: z.string().optional(),
    sections: z.array(
      z.object({
        type: z.string(),
        title: z.string(),
        content: z.string().optional(),
        img: z
          .object({
            src: z.string(),
            alt: z.string(),
          })
          .optional(),
      }),
    ),
    roles: z.array(reference("roles")),
    technologies: z.array(reference("technologies")),
  }),
});

const technologiesCollection = defineCollection({
  // type: "data",
  loader: glob({ pattern: "**/*.yml", base: "./src/content/technologies" }),
  schema: z.object({
    title: z.string(),
    url: z.string(),
  }),
});

const rolesCollection = defineCollection({
  // type: "data",
  loader: glob({ pattern: "**/*.yml", base: "./src/content/roles" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const teachingCollection = defineCollection({
  // type: "content",
  loader: glob({ pattern: "**/*.md", base: "./src/content/teaching" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
    courseSite: z.string().optional(),
    introduction: z.string(),
    programs: z.array(
      z.object({
        title: z.string(),
        link: z.string(),
        description: z.string().optional(),
        institution: z.string(),
        timeline: z.object({
          start: z.date(),
          end: z.date().optional(),
        }),
      }),
    ),
    highlights: z.array(
      z.object({
        title: z.string(),
        description: z.string().optional(),
      }),
    ),
  }),
});

const coolStuffCollection = defineCollection({
  // type: "content",
  loader: glob({ pattern: "**/*.md", base: "./src/content/cool-stuff" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
    categories: z.array(reference("cool-stuff-categories")),
  }),
});

const coolStuffCategories = defineCollection({
  loader: glob({
    pattern: "**/*.yml",
    base: "./src/content/cool-stuff-categories",
  }),
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
  teaching: teachingCollection,
  "cool-stuff": coolStuffCollection,
  "cool-stuff-categories": coolStuffCategories,
};
