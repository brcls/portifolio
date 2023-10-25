"use client";

import React from "react";
import { projects } from "../../../../public/data/projects";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import example from "../../../../public/example.png";
import me from "../../../../public/me.png";

export default function Project({ params }: { params: { slug: string } }) {
  const project = projects.find((project) => project.slug === params.slug);

  return (
    <>
      <div className="flex flex-col text-center gap-10 justify-center items-center py-20 w-11/12 md:w-3/4 mx-auto">
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
        <p className="md:w-2/3 text-5xl md:text-6xl font-bold">
          {project?.name}
        </p>

        <div className="flex flex-wrap gap-2">
          {project?.techStack?.map((tech) => (
            <div
              key={tech}
              className="bg-blue-500 rounded-full px-4 text-sm md:text-md"
            >
              {tech}
            </div>
          ))}
        </div>

        <p className="md:text-md text-sm">{project?.description}</p>

        <Link
          className="glass-dark px-10 py-4 rounded hover:bg-zinc-900 active:bg-zinc-900
        hover:scale-105 active:scale-95 duration-500 flex items-center gap-2"
          href="https://github.com/brcls/erick-barcelos"
        >
          <AiFillGithub size={30} />
          Repository
        </Link>

        {[0, 0, 0].map((item) => (
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
        ))}
      </div>
    </>
  );
}
