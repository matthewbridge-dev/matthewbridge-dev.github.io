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
        degree: z.string(),
        institution: z.string(),
        location: z.string(),
        startDate: z.string(),
        endDate: z.string().optional(),
        description: z.string().optional(),
    }),
});

// Projects Collection
const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        technologies: z.array(z.string()).optional(),
        featured: z.boolean().optional(),
    }),
});

// Blog Collection
const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.string(),
        tags: z.array(z.string()).optional(),
    }),
});
