import React from "react";
import Image from "next/image";

export default function Card() {
  return (
    <div
      className="group cursor-pointer mx-auto bg-zinc-700 backdrop-filter backdrop-blur-sm 
      bg-opacity-25 h-96 rounded-xl hover:scale-105 duration-500 transform-gpu
       justify-between flex overflow-hidden"
    >
      <div className="p-10 text-left w-1/2">
        <p className="text-bold text-2xl">Projeto exemplo</p>
        <div className="flex flex-wrap gap-2 my-6">
          {[0, 1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-blue-700 rounded-full px-4">
              Teste
            </div>
          ))}
        </div>
        <p className="text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          aliquid voluptatum provident. Consectetur vel nesciunt commodi
          deserunt accusantium nobis dicta aspernatur, voluptates illum impedit
          hic corporis, sequi fugit reiciendis corrupti.
        </p>
      </div>
      <div className="w-1/2 flex justify-end items-end">
        <div
          className="w-full h-60 top-10 left-4 relative group-hover:-translate-y-10 group-hover:-translate-x-4
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
