import { defineCollection, z } from 'astro:content';

const assignments = defineCollection({
	type: 'content',
	schema: z.object({}).optional(),
});

const weeks = defineCollection({
	type: 'content',
	schema: z.object({
		order: z.number(),
		week: z.string(),
		date: z.string(),
		theme: z.string().optional(),
	}),
});

export const collections = { assignments, weeks };
