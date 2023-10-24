import Card from "@/components/Card";
import Header from "@/components/Header";
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
            objectFit="contain"
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
        <p className="text-2xl text-bold">Projects</p>
        <div className="flex flex-wrap justify-center gap-2 my-12">
          {filter.map((item, index) => (
            <button
              key={index}
              className={`glass-dark px-6 py-1 rounded-full active:scale-95 font-bold
               hover:scale-110 duration-500 border border-zinc-600 delay-hover ${
                 item.active
                   ? "bg-blue-500 hover:bg-blue-800 active:bg-blue-800"
                   : "hover:bg-zinc-900 active:bg-zinc-900 "
               }`}
              onClick={() => handleSelectFilter(index)}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
