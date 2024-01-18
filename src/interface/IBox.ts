import { StaticImageData } from "next/image";
import { ClassNameValue } from "tailwind-merge";

export interface IBox {
  className?: ClassNameValue;
  image?: StaticImageData;
  text?: string;
}
