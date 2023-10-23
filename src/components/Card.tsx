import React from "react";
import Image from "next/image";

export default function Card() {
  return (
    <div
      className="group cursor-pointer mx-auto bg-zinc-700 backdrop-filter backdrop-blur-sm 
      bg-opacity-25 md:h-96 h-[400px] rounded-xl hover:scale-105 duration-500 transform-gpu
       justify-between flex md:flex-row flex-col overflow-hidden"
    >
      <div className="md:p-10 p-5 text-left md:w-1/2 w-full">
        <p className="text-bold md:text-2xl text-xl">Projeto exemplo</p>
        <div className="flex flex-wrap gap-2 my-6">
          {[0, 1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-blue-700 rounded-full px-4 text-sm md:text-md"
            >
              Teste
            </div>
          ))}
        </div>
        <p className="md:text-md text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          aliquid voluptatum provident. Consectetur vel nesciunt commodi
          deserunt accusantium nobis dicta aspernatur, voluptates illum impedit
          hic corporis, sequi fugit reiciendis corrupti.
        </p>
      </div>
      <div className="md:w-1/2 w-full flex md:justify-end md:items-end">
        <div
          className="w-full h-60 md:top-10 md:left-4 relative 
          md:group-hover:-translate-y-10 group-hover:-translate-y-1/2 md:group-hover:-translate-x-4
        duration-500 rounded-xl overflow-hidden"
        >
          <Image
            src="/paisagem.jpg"
            alt="teste"
            fill
            objectFit="cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
