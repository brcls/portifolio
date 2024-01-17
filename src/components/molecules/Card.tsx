import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Route } from "next";
import { IProject } from "@/interface/IProject";
import Text from "../atoms/Text";
import SubTitle from "../atoms/SubTitle";

interface ICardProps {
  project: IProject;
  index: number;
}

export default function Card({ project, index }: ICardProps) {
  return (
    <Link href={("project/" + project.slug) as Route}>
      <div
        className={`group cursor-pointer glass-dark row-span-1 rounded-xl p-2 glass-dark ${
          index === 0 || index === 3 ? "col-span-2" : ""
        } ${index === 1 ? "md:row-span-2" : ""}
        hover:scale-[1.02] delay-75 duration-500 transform-gpu justify-between flex
         md:flex-row flex-col overflow-hidden active:scale-[1.02] select-none`}
      >
        <div className="md:p-10 p-5 text-left md:w-1/2 w-full select-none">
          <SubTitle>{project.name}</SubTitle>
          <div className="flex flex-wrap gap-2 my-6">
            {project.techStack.map((tech) => (
              <div key={tech} className="bg-blue-500 rounded-full px-4">
                <Text>{tech}</Text>
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-1/2 w-full flex md:justify-end md:items-end">
          <div
            className="w-full h-80 md:top-10 md:left-4 relative 
          group-hover:-translate-y-10 md:group-hover:-translate-x-4
          group-active:-translate-y-10 md:group-active:-translate-x-4
          duration-500 delay-75 rounded-xl overflow-hidden"
          >
            {project.coverImage ? (
              <Image
                className="select-none"
                src={project.coverImage}
                alt="teste"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            ) : null}
          </div>
        </div>
      </div>
    </Link>
  );
}
