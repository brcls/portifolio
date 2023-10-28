"use client";

import Card from "@/components/Card";
import Image from "next/image";
import React, { useState } from "react";
import { projects } from "../../public/data/projects";
import { techStack } from "../../public/data/techStack";
import Aurora from "@/components/Aurora/Aurora";

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

  const projectCards = filteredProjects.map((project, index) => (
    <Card key={project.slug} project={project} index={index} />
  ));

  const handleSelectFilter = (index: number) => {
    const updatedFilter = [...filter]; // Criar uma cópia do array filter
    updatedFilter[index].active = !updatedFilter[index].active; // Atualizar a propriedade active para true
    setFilter(updatedFilter); // Atualizar o estado com o novo array
  };

  return (
    <>
      <Aurora />
      <div className="h-[100svh] flex flex-col justify-center text-center items-center">
        <div className="w-full h-2/5 my-4 relative select-none">
          <Image
            className="select-none"
            src="/me.png"
            alt="me"
            fill
            style={{ objectFit: "contain" }}
            priority
            quality={100}
          />
        </div>
        <p className="mx-2 text-8xl md:text-9xl font-bold">
          Olá! I'am Erick Barcelos
        </p>
      </div>

      <div className="flex flex-col text-center py-20 w-11/12 mx-auto">
        <p
          className="text-8xl md:text-9xl font-bold bg-gradient-to-br
         from-indigo-500 via-purple-500 to-pink-500 bg-clip-text pb-4 inline-block 
         text-transparent"
        >
          Projects
        </p>
        <div className="flex flex-wrap justify-center gap-2 my-12">
          {filter.map((item, index) => (
            <button
              key={index}
              className={`glass-dark px-6 py-1 rounded-full active:scale-95 
              font-bold hover:scale-110 duration-500 border border-zinc-600
              select-none
              ${
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
        <div className="grid  md:grid-cols-2 gap-4 w-full">{projectCards}</div>
      </div>
    </>
  );
}
