import React from "react";
import { projects } from "../../../../public/data/projects";
import Image from "next/image";

export default function Page({ params }: { params: { slug: string } }) {
  const project = projects.find((project) => project.slug === params.slug);

  return (
    <div className="flex justify-center items-center">
      <div className="w-3/4 h-[700px] relative rounded-2xl overflow-hidden">
        <Image
          src="/paisagem.jpg"
          alt="me"
          fill
          style={{ objectFit: "cover" }}
          priority
          quality={100}
        />
      </div>
    </div>
  );
}
