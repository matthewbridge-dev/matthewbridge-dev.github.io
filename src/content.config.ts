import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// About Collection
const about = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/about" }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    about: z.string(),
    email: z.string(),
    phone: z.string(),
    github: z.string(),
    linkedin: z.string(),
  }),
});

// Experience Collection
const experience = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/experience" }),
  schema: z.object({
    company: z.string(),
    title: z.string(),
    location: z.string(),
    startDate: z.string(),
    endDate: z.string().optional(),
    description: z.string().optional(),
  }),
});

// Education Collection
const education = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/education" }),
  schema: z.object({
    institution: z.string(),
    degree: z.string(),
    location: z.string(),
    startDate: z.string(),
    endDate: z.string().optional(),
    description: z.string().optional(),
    accolades: z.array(z.string()).optional(),
    extracurricular: z.array(z.string()).optional(),
  }),
});

// Projects Collection
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
    repo: z.string(),
    demo: z.string(),
    imagePath: z.string(),
    featured: z.boolean().default(false),
  }),
});

// Blog Collection
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

// Export all registered collections
export const collections = {
  about,
  experience,
  education,
  projects,
  blog,
};
