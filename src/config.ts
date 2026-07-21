import { defineCollection} from 'astro:content';
import { z } from 'astro/zod'

// Profile Collection
const profileCollection = defineCollection({
    type: 'content',
    schema: z.object({
        name: z.string(),
        title: z.string(),
        about: z.string().optional(),
        email: z.string().optional(),
        phone: z.string().optional(),
    }),
});

// Experience collection
const experienceCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        company: z.string(),
        location: z.string(),
        startDate: z.string(),
        endDate: z.string().optional(),
        description: z.string().optional(),
    }),
});

// Education Collection
const educationCollection = defineCollection({
    type: 'content',
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
const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        technologies: z.array(z.string()),
        url: z.string(),
        featured: z.boolean().default(false),
    }),
});

// Blog Collection
const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.string(),
        tags: z.array(z.string()).optional(),
        content: z.string(),
    }),
});