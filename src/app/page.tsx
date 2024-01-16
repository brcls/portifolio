import Image from "next/image";
import React from "react";
import Aurora from "@/components/atoms/Aurora/Aurora";
import Title from "@/components/atoms/Title";
import ProjectsList from "@/components/organisms/ProjectsList";

export default function Home() {
  return (
    <>
      <Aurora />
      <div className="h-[100svh] flex flex-col justify-center text-center items-center">
        <div className="w-full h-2/5 my-4 relative select-none">
          <Image
            className="select-none"
            src="/images/assets/me.png"
            alt="me"
            fill
            style={{ objectFit: "contain" }}
            priority
            quality={100}
          />
        </div>
        <Title>Olá! I'am Erick Barcelos</Title>
      </div>
      <ProjectsList />
    </>
  );
}
