import { atom } from 'nanostores';
import type { Project } from '../types';

export const activeProjectModal = atom<Project | null>(null);