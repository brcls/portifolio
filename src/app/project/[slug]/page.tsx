"use client";

import React from "react";
import { projects } from "../../../../public/data/projects/projects";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import Title from "@/components/atoms/Title";
import { UrlObject } from "url";

export default function Project({ params }: { params: { slug: string } }) {
  const project = projects.find((project) => project.slug === params.slug);

  return (
    <>
      <div className="flex flex-col text-center w-11/12 md:w-3/4 mx-auto">
        <div className="h-[100svh] flex flex-col justify-center text-center items-center gap-4 w-full">
          <div className="flex md:flex-row flex-col justify-between items-center w-full">
            <Title gradient>{project?.name}</Title>
            <Link
              className="glass-dark md:w-1/4 w-full px-10 py-4 rounded hover:bg-zinc-900 active:bg-zinc-900
            hover:scale-105 active:scale-95 duration-500 flex items-center justify-center gap-2"
              href={project?.gitLink as UrlObject}
            >
              <AiFillGithub size={30} />
              Repository
            </Link>
          </div>

          <div className="flex md:flex-row flex-col justify-between w-full gap-10">
            <div
              className="flex flex-wrap gap-4 text-start 
            items-start justify-start flex-col md:w-1/2 w-full"
            >
              <div className="flex items-center justify-between text-center glass-dark p-4 rounded-2xl w-full gap-2">
                <p className="text-xl text-start">Tech Stack</p>
                <div className="flex flex-wrap gap-2 justify-end">
                  {project?.techStack?.map((tech) => (
                    <div
                      key={tech}
                      className="bg-blue-500 rounded-lg px-4 flex items-center text-md"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              {project?.timeline ? (
                <div className="flex items-center justify-between text-center glass-dark p-4 rounded-2xl w-full gap-2">
                  <p className="text-xl text-start">Timeline</p>
                  <p className="bg-blue-500 rounded-lg px-4 flex items-center text-md">
                    {project?.timeline?.start} - {project?.timeline?.end}
                  </p>
                </div>
              ) : null}

              <div className="flex items-center justify-between text-center glass-dark p-4 rounded-2xl w-full gap-2">
                <p className="text-xl text-start">Members</p>
                <div className="flex flex-wrap gap-2 justify-end">
                  {project?.members.map((member) => (
                    <p className="bg-blue-500 rounded-lg px-4 flex items-center text-md">
                      {member}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <p className="md:text-xl text-md md:w-1/2 w-full text-start">
              {project?.description}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap md:flex-row flex-col gap-16 mb-10 justify-between items-center">
          {project?.projectVisualization?.map((object, index) => (
            <div className="flex flex-col gap-2">
              <p className="md:text-5xl text-4xl md:text-start">
                {object.title}
              </p>
              <p className="md:text-xl text-md text-start">
                {object.description}
              </p>

              <div className="w-full flex flex-wrap gap-4 md:flex-row flex-col items-center">
                {object.images?.map((image) => (
                  <Image
                    key={index}
                    alt="Example"
                    src={image ?? ""}
                    sizes="100vw"
                    style={{
                      width: "auto",
                      maxWidth: "90vw",
                      height: "90svh",
                      borderRadius: "10px",
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
