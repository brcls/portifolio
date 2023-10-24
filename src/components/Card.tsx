import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Route } from "next";

interface IProject {
  slug: string;
  name: string;
  description: string;
  techStack: string[];
}

interface ICardProps {
  project: IProject;
}

export default function Card({ project }: ICardProps) {
  const { slug, name, description, techStack } = project;

  return (
    <Link href={("project/" + slug) as Route}>
      <div
        className="group cursor-pointer glass-dark md:h-96 h-[300px] rounded-xl hover:scale-105 duration-500 transform-gpu
      justify-between flex md:flex-row flex-col overflow-hidden"
      >
        <div className="md:p-10 p-5 text-left md:w-1/2 w-full">
          <p className="text-bold md:text-2xl text-xl">{name}</p>
          <div className="flex flex-wrap gap-2 my-6">
            {techStack.map((tech) => (
              <div
                key={tech}
                className="bg-blue-500 rounded-full px-4 text-sm md:text-md"
              >
                {tech}
              </div>
            ))}
          </div>
          <p className="md:text-md text-sm">{description}</p>
        </div>
        <div className="md:w-1/2 w-full flex md:justify-end md:items-end">
          <div
            className="w-full h-80 md:top-10 md:left-4 relative 
          group-hover:-translate-y-10 md:group-hover:-translate-x-4
          duration-500 rounded-xl overflow-hidden"
          >
            <Image
              src="/paisagem.jpg"
              alt="teste"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
