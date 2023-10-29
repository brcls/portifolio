"use client";

import React from "react";
import { projects } from "../../../../public/data/projects";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import example from "../../../../public/example.png";
import me from "../../../../public/me.png";
import Title from "@/components/atoms/Title";

export default function Project({ params }: { params: { slug: string } }) {
  const project = projects.find((project) => project.slug === params.slug);

  return (
    <>
      <div
        className="flex flex-col text-center gap-4 justify-center items-center 
      py-28 w-11/12 md:w-3/4 mx-auto"
      >
        <Title gradient>{project?.name}</Title>

        <div
          className="flex flex-wrap gap-4 md:gap-10 text-start p-4 
          items-start justify-start md:flex-row flex-col w-full md:w-auto md:justify-center"
        >
          <div className="text-start glass-dark p-4 rounded-2xl">
            <p className="md:mb-4 mb-2 text-2xl">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {project?.techStack?.map((tech) => (
                <div key={tech} className="bg-blue-500 rounded-xl px-4 text-md">
                  {tech}
                </div>
              ))}
            </div>
          </div>
          <div className="text-start glass-dark p-4 rounded-2xl">
            <p className="md:mb-4 mb-2 text-2xl">Timeline</p>
            <p className="bg-blue-500 rounded-xl px-4 text-md">2020 - today</p>
          </div>

          <div className="text-start glass-dark p-4 rounded-2xl">
            <p className="md:mb-4 mb-2 text-2xl">Members</p>
            <div className="flex gap-2 flex-wrap">
              <p className="bg-blue-500 rounded-xl px-4 text-md">Erick</p>
              <p className="bg-blue-500 rounded-xl px-4 text-md">Erick</p>
              <p className="bg-blue-500 rounded-xl px-4 text-md">Erick</p>
            </div>
          </div>
        </div>

        <Image
          alt="Example"
          src={example}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "10px",
          }}
        />

        <Title>Description</Title>
        <p className="md:text-md text-sm">{project?.description}</p>

        <Link
          className="glass-dark px-10 py-4 rounded hover:bg-zinc-900 active:bg-zinc-900
          hover:scale-105 active:scale-95 duration-500 flex items-center gap-2"
          href="https://github.com/brcls/erick-barcelos"
        >
          <AiFillGithub size={30} />
          Repository
        </Link>

        {[...Array(5)].map((_, i) => (
          <Image
            key={i}
            alt="Example"
            src={example}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
            }}
          />
        ))}
      </div>
    </>
  );
}
