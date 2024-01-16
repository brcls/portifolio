import { StaticImageData } from "next/image";
import Loading from "../images/projects/tripper/IMG_4552.png";
import { IProject } from "@/interface/IProject";

export const projects: IProject[] = [
  {
    slug: "portifolio",
    description: `Crafted with Next.js and styled with Tailwind CSS, my personal portfolio serves as both a testing ground for
                  frontend explorations and a showcase for my projects and accomplishments. Explore my work and journey
                  through the interactive display of my skills and achievements.`,
    name: "Portifolio",
    techStack: ["React", "Next.js", "Tailwind", "Typescript"],
    timeline: null,
    gitLink: "https://github.com/brcls/erick-barcelos",
    members: ["Erick Barcelos"],
  },
  {
    slug: "tripper",
    description: `Tripper is a React Native application designed to showcase routes for road trips that traverse scenic
                  landscapes, restaurants, or tourist attractions. Users have the ability to create and share their own routes, with
                  the added feature of voting on routes to elevate their visibility within the community.`,
    name: "Tripper",
    techStack: ["React Native", "Typescript"],
    timeline: null,
    gitLink: "https://github.com/brcls/tripper",
    members: ["Erick Barcelos"],
    projectVisualization: [{ images: [Loading] }],
    coverImage: Loading,
  },
];
