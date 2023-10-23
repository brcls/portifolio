import React from "react";
import Image from "next/image";

export default function Card() {
  return (
    <div
      className="mx-10 bg-zinc-700 h-96 rounded-xl 
    hover:scale-105 duration-500 transform-gpu grid"
    >
      <div className="w-1/2 h-60 relative">
        <Image
          src="/paisagem.jpg"
          alt="teste"
          fill
          objectFit="cover"
          priority
        />
      </div>
    </div>
  );
}
