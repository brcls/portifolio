"use client";

import Card from "@/components/Card";
import Image from "next/image";
import React, { useState } from "react";
import { projects } from "../../public/data/projects";
import { techStack } from "../../public/data/techStack";

type TechItem = {
  name: string;
  active: boolean;
};

function createTechItem(name: string): TechItem {
  return { name, active: false };
}

const initialTechStack: TechItem[] = techStack.map(createTechItem);

export default function Home() {
  const [filter, setFilter] = useState<TechItem[]>(initialTechStack);

  const filteredProjects = filter.some((item) => item.active)
    ? projects.filter((project) =>
        filter.some(
          (key) =>
            key.active &&
            project.techStack.some(
              (tech) => tech.toLowerCase() === key.name.toLowerCase()
            )
        )
      )
    : projects;

  const projectCards = filteredProjects.map((project) => (
    <Card key={project.slug} project={project} />
  ));

  const handleSelectFilter = (index: number) => {
    const updatedFilter = [...filter]; // Criar uma cópia do array filter
    updatedFilter[index].active = !updatedFilter[index].active; // Atualizar a propriedade active para true
    setFilter(updatedFilter); // Atualizar o estado com o novo array
  };

  return (
    <>
      <div className="h-screen flex flex-col justify-center text-center items-center">
        <div className="w-full h-2/5 my-4 relative">
          <Image
            src="/me.png"
            alt="me"
            fill
            style={{ objectFit: "contain" }}
            priority
            quality={100}
          />
        </div>
        <p className="md:w-2/3 text-4xl md:text-6xl text-bold">
          Hello! I'am Erick Barcelos, Software Engineer
        </p>
      </div>

      <div
        className="flex flex-col text-center border-t-2 border-zinc-700 py-10 
      w-4/5 mx-auto"
      >
        <p className="text-2xl text-bold">Projects</p>
        <div className="flex flex-wrap justify-center gap-2 my-12">
          {filter.map((item, index) => (
            <button
              key={index}
              className={`glass-dark px-6 py-1 rounded-full active:scale-95 
              font-bold hover:scale-110 duration-500 border border-zinc-600
              delay-hover ${
                item.active
                  ? "bg-blue-500 hover:bg-blue-800 active:bg-blue-800"
                  : "hover:bg-zinc-900 active:bg-zinc-900"
              }`}
              onClick={() => handleSelectFilter(index)}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-10">{projectCards}</div>
      </div>
    </>
  );
}
