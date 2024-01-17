"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Text from "../atoms/Text";

export default function Header() {
  const [background, setBackground] = useState(false);

  const handleScroll = () => {
    console.log(window.scrollY);
    if (window.scrollY > 40) {
      setBackground(true);
    } else {
      setBackground(false);
    }
  };

  useEffect(() => {
    // Adicionando ouvinte de evento de roda do mouse
    document.addEventListener("wheel", handleScroll);

    // Adicionando ouvinte de evento de rolagem para dispositivos móveis
    document.addEventListener("scroll", handleScroll);

    // Adicionando um ouvinte de evento de redimensionamento da janela para lidar com a posição inicial
    window.addEventListener("resize", handleScroll);

    return () => {
      // Removendo ouvintes de eventos ao desmontar o componente
      document.removeEventListener("wheel", handleScroll);
      document.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []); // O array vazio [] garante que o efeito só é executado uma vez, sem depender de qualquer estado ou propriedade

  return (
    <header
      className={`${
        background ? "glass-dark border-none" : "bg-none"
      } flex mt-4 justify-center items-center gap-4 px-4 py-2 w-min inset-x-0 
      mx-auto rounded-full fixed z-10 select-none transition duration-1000`}
    >
      <Link href={"/"}>
        <button
          className="py-2 px-6 rounded-full hover:scale-110 active:scale-95 duration-500 
        hover:bg-zinc-800 active:bg-zinc-900"
        >
          <Text className="whitespace-nowrap">Projects</Text>
        </button>
      </Link>
      <Link href={"/about-me"}>
        <button
          className="py-2 px-6 rounded-full hover:scale-110 active:scale-95 duration-500 
        hover:bg-zinc-800 active:bg-zinc-900"
        >
          <Text className="whitespace-nowrap">About me</Text>
        </button>
      </Link>
      <Link href={"/contact"}>
        <button
          className="py-2 px-6 rounded-full hover:scale-110 active:scale-95 duration-500 
        hover:bg-zinc-800 active:bg-zinc-900"
        >
          <Text className="whitespace-nowrap">Contact</Text>
        </button>
      </Link>
    </header>
  );
}
