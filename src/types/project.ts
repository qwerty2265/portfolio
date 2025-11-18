import { z } from 'astro:content';

export const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
  liveUrl: z.string().url().optional(),
  githubUrl: z.string().url().optional(),
  detailsUrl: z.string().optional(),
  date: z.string().optional(),
  image: z.string().optional(),
});

export type ProjectData = z.infer<typeof projectSchema>;

export interface Project extends ProjectData {
  id: string;
}