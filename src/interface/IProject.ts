import { StaticImageData } from "next/image";
import { IVisualization } from "./IVisualization";

export interface IProject {
  slug: string;
  description: string;
  name: string;
  techStack: string[];
  timeline: { start: string; end: string } | null | undefined;
  gitLink: unknown;
  members: string[];
  projectVisualization?: IVisualization[];
  coverImage?: StaticImageData;
}
