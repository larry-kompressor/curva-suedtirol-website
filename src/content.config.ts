import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    lang: z.enum(['de', 'it']),
    excerpt: z.string(),
    image: z.string().optional(),
    category: z.enum(['auswaertsfahrt', 'stellungnahme', 'info', 'sonstiges']).default('info'),
    externalLink: z.string().url().optional(),
    externalLinkLabel: z.string().optional(),
  }),
});

export const collections = { news };