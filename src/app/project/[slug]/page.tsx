import React from "react";
import { projects } from "../../../../public/data/projects";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";

export default function Page({ params }: { params: { slug: string } }) {
  const project = projects.find((project) => project.slug === params.slug);

  return (
    <div className="flex flex-col text-center gap-10 justify-center items-center py-20">
      <div className="w-full md:w-3/4 h-72 md:h-[700px] relative md:rounded-2xl overflow-hidden">
        <Image
          src="/example.png"
          alt="me"
          fill
          style={{ objectFit: "cover" }}
          priority
          quality={100}
        />
      </div>
      <p className="md:w-2/3 text-5xl md:text-6xl font-bold">{project?.name}</p>
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
      <Link href="https://github.com/brcls/erick-barcelos">
        <button
          className="glass-dark px-10 py-4 rounded hover:bg-zinc-900 active:bg-zinc-900
        hover:scale-110 active:scale-95 duration-500 flex items-center gap-2"
        >
          <AiFillGithub size={30} />
          GitHub
        </button>
      </Link>
    </div>
  );
}
