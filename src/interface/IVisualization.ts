import { StaticImageData } from "next/image";

export interface IVisualization {
  title?: string;
  description?: string;
  images?: StaticImageData[];
}
