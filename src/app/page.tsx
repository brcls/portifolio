import Card from "@/components/Card";
import Image from "next/image";
import React from "react";

export default function Home() {
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
        <div className="text-2xl text-bold">Projects</div>
        <div className="grid gap-10 my-10">
          {[0, 1, 2, 3].map((item) => (
            <Card key={item} />
          ))}
        </div>
      </div>
    </>
  );
}
