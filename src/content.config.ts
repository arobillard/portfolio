import { glob } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";

const img = z.object({
  src: z.string(),
  alt: z.string(),
});

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
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string(),
          icon: z.string(),
        }),
      )
      .optional(),
    sections: z.array(
      z.object({
        type: z.enum([
          "split-content",
          "info-cards",
          "technologies-cards",
          "call-out",
        ]),
        title: z.string(),
        content: z.string().optional(),
        classes: z.string().optional(),
        img: img.optional(),
        link: z
          .object({
            label: z.string(),
            url: z.string(),
            icon: z.string().optional(),
          })
          .optional(),
        cards: z
          .array(
            z.object({
              id: z.string().optional(),
              heading: z.string().optional(),
              content: z.string().optional(),
              img: img.optional(),
            }),
          )
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
    img,
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
    description: z.string().optional(),
    shortDesc: z.string(),
    order: z.number(),
    categories: z.array(reference("cool-stuff-categories")),
    active: z.boolean(),
    featureImg: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    externalLink: z.string().optional(),
    externalLinkText: z.string().optional(),
    roles: z.array(reference("roles")),
    technologies: z.array(reference("technologies")),
    vimeoId: z.string().optional(),
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
