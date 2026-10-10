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
    phone: z.string().optional(),
    github: z.string().optional(),
    githubusername: z.string().optional(),
    linkedin: z.string().optional(),
    linkedinusername: z.string().optional(),
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
    isCurrent: z.boolean().optional(),
    description: z.string().optional(),
    skills: z.array(z.string()).optional(),
    highlights: z.array(z.string()).optional(),
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
    gpa: z.string().optional(),
    description: z.string().optional(),
    coursework: z.array(z.string()).optional(),
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
    date: z.string().optional(),
    role: z.string().optional(),
    technologies: z.array(z.string()),
    repo: z.string().optional(),
    demo: z.string().optional(),
    imagePath: z.string().optional().default("/placeholder-project.svg"),
    featured: z.boolean().default(false),
    isPrivate: z.boolean().default(false),
    privateNote: z.string().optional(),
  }),
});

// Export all registered collections
export const collections = {
  about,
  experience,
  education,
  projects,
};
