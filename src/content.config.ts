import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { projectSchema } from './types/project';

const projectCollection = defineCollection({
  loader: glob({ pattern: '*.md', base: 'src/projects'}),
  schema: projectSchema,
});

export const collections = { "project": projectCollection };