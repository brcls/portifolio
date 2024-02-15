import TripperCapa from "../../images/projects/tripper/splashScreen.png";
import PortifolioCapa from "../../images/projects/portifolio/capa.png";
import { IProject } from "@/interface/IProject";
import { tripperVisualization } from "./tripperVisualization";

export const projects: IProject[] = [
  {
    slug: "portifolio",
    description: `Crafted with Next.js and styled with Tailwind CSS, my personal portfolio serves as both a testing ground for
                  frontend explorations and a showcase for my projects and accomplishments. Explore my work and journey
                  through the interactive display of my skills and achievements.`,
    name: "Portifolio",
    techStack: ["React", "Next.js", "Tailwind", "TypeScript"],
    timeline: null,
    gitLink: "https://github.com/brcls/erick-barcelos",
    members: ["Erick Barcelos"],
    coverImage: PortifolioCapa,
  },
  {
    slug: "tripper",
    description: `Tripper is a React Native application designed to showcase routes for road trips that traverse scenic
                  landscapes, restaurants, or tourist attractions. Users have the ability to create and share their own routes, with
                  the added feature of voting on routes to elevate their visibility within the community.`,
    name: "Tripper",
    techStack: ["React Native", "TypeScript"],
    timeline: null,
    gitLink: "https://github.com/brcls/tripper",
    members: ["Erick Barcelos"],
    projectVisualization: tripperVisualization,
    coverImage: TripperCapa,
  },
  {
    slug: "dost",
    description: `Tripper is a React Native application designed to showcase routes for road trips that traverse scenic
                  landscapes, restaurants, or tourist attractions. Users have the ability to create and share their own routes, with
                  the added feature of voting on routes to elevate their visibility within the community.`,
    name: "DOST",
    techStack: ["React", "TypeScript", "Tailwind", "Next.js"],
    timeline: null,
    link: "https://dostproject.vercel.app/",
    members: ["Erick Barcelos"],
    projectVisualization: tripperVisualization,
    coverImage: TripperCapa,
  },
  {
    slug: "joystick",
    description: `Tripper is a React Native application designed to showcase routes for road trips that traverse scenic
                  landscapes, restaurants, or tourist attractions. Users have the ability to create and share their own routes, with
                  the added feature of voting on routes to elevate their visibility within the community.`,
    name: "Joystick",
    techStack: ["React", "JavaScript", "MongoDB", "Node.js"],
    timeline: null,
    gitLink: "https://github.com/brcls/joystick",
    members: ["Erick Barcelos"],
    projectVisualization: tripperVisualization,
    coverImage: TripperCapa,
  },
  {
    slug: "secret-santa",
    description: `Tripper is a React Native application designed to showcase routes for road trips that traverse scenic
                  landscapes, restaurants, or tourist attractions. Users have the ability to create and share their own routes, with
                  the added feature of voting on routes to elevate their visibility within the community.`,
    name: "Secret Santa",
    techStack: ["React", "JavaScript", "MongoDB", "Node.js"],
    timeline: null,
    gitLink: "https://github.com/brcls/amigo-secreto",
    members: ["Erick Barcelos"],
    projectVisualization: tripperVisualization,
    coverImage: TripperCapa,
  },
];
