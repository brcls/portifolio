import { StaticImageData } from "next/image";

export interface IProject {
  slug: string;
  description: string;
  name: string;
  techStack: string[];
  timeline: { start: string; end: string } | null | undefined;
  gitLink: unknown;
  members: string[];
  projectVisualization?: {
    title?: string;
    description?: string;
    images?: StaticImageData[];
  }[];
  coverImage?: StaticImageData;
}
