"use client";

import React from "react";
import { projects } from "../../../../public/data/projects/projects";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import Title from "@/components/atoms/Title";
import { UrlObject } from "url";
import { Route } from "next";
import Text from "@/components/atoms/Text";
import SubTitle from "@/components/atoms/SubTitle";

export default function Project({ params }: { params: { slug: string } }) {
  const project = projects.find((project) => project.slug === params.slug);

  return (
    <>
      <div className="flex flex-col text-center w-11/12 md:w-3/4 mx-auto">
        <div className="h-[100svh] flex flex-col justify-center text-center items-center gap-4 w-full">
          <div className="flex md:flex-row flex-col justify-between items-center w-full">
            <Title gradient>{project?.name}</Title>
            {project?.gitLink && (
              <Link
                className="glass-dark md:w-1/4 w-full px-10 py-4 rounded hover:bg-zinc-900 active:bg-zinc-900
              hover:scale-105 active:scale-95 duration-500 flex items-center justify-center gap-2"
                href={project.gitLink}
              >
                <AiFillGithub size={30} />
                <Text>Repository</Text>
              </Link>
            )}
            {project?.link && (
              <a
                href={project.link}
                className="glass-dark md:w-1/4 w-full px-10 py-4 rounded hover:bg-zinc-900 active:bg-zinc-900
              hover:scale-105 active:scale-95 duration-500 flex items-center justify-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Text>Project</Text>
              </a>
            )}
          </div>

          <div className="flex md:flex-row flex-col justify-between w-full gap-10">
            <div
              className="flex flex-wrap gap-4 text-start 
            items-start justify-start flex-col md:w-1/2 w-full"
            >
              <div className="flex items-center justify-between text-center glass-dark p-4 rounded-2xl w-full gap-2">
                <Text>Tech Stack</Text>
                <div className="flex flex-wrap gap-2 justify-end">
                  {project?.techStack?.map((tech) => (
                    <div
                      key={tech}
                      className="bg-blue-500 rounded-lg px-4 flex items-center"
                    >
                      <Text>{tech}</Text>
                    </div>
                  ))}
                </div>
              </div>

              {project?.timeline ? (
                <div className="flex items-center justify-between text-center glass-dark p-4 rounded-2xl w-full gap-2">
                  <Text>Timeline</Text>
                  <div className="bg-blue-500 rounded-lg px-4 flex items-center">
                    <Text>
                      {project?.timeline?.start} - {project?.timeline?.end}
                    </Text>
                  </div>
                </div>
              ) : null}

              <div className="flex items-center justify-between text-center glass-dark p-4 rounded-2xl w-full gap-2">
                <Text>Members</Text>
                <div className="flex flex-wrap gap-2 justify-end">
                  {project?.members.map((member) => (
                    <div className="bg-blue-500 rounded-lg px-4 flex items-center">
                      <Text>{member}</Text>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Text className="md:w-1/2 w-full text-start">
              {project?.description}
            </Text>
          </div>
        </div>

        <div className="flex flex-wrap md:flex-row flex-col gap-16 mb-10 justify-between items-center">
          {project?.projectVisualization?.map((object, index) => (
            <div className="flex flex-col gap-2">
              <SubTitle className="md:text-start">{object.title}</SubTitle>
              <Text>{object.description}</Text>

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
