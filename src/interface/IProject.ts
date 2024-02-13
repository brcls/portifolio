import { StaticImageData } from "next/image";
import { IVisualization } from "./IVisualization";
import { TypeTechStack } from "../../public/data/techStack";
import { Route } from "next";

export interface IProject {
  slug: string;
  description: string;
  name: string;
  techStack: TypeTechStack[];
  timeline: { start: string; end: string } | null | undefined;
  gitLink?: Route;
  link?: Route;
  members: string[];
  projectVisualization?: IVisualization[];
  coverImage?: StaticImageData;
}
