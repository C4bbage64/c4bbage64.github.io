import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.string(),
		tags: z.array(z.string()).default([]),
		readingTime: z.string().optional(),
	}),
});

const art = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		year: z.number().int().optional(),
		tools: z.array(z.string()).default([]),
		image: z.string().optional(),
		tags: z.array(z.string()).default([]),
	}),
});

export const collections = { blog, art };
