import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header
      className="glass-dark flex mt-4 justify-center items-center gap-2 
                    p-2 md:w-1/2 inset-x-0 mx-auto rounded-xl fixed z-10
                    w-11/12 select-none"
    >
      <Link href={"/"}>
        <button
          className="text-zinc-100 text-md md:text-xl py-2 px-6 
        rounded-xl font-md hover:scale-110 active:scale-95 duration-500 
        hover:bg-zinc-800 active:bg-zinc-900/hover:bg-zinc-800"
        >
          Projects
        </button>
      </Link>
      <Link href={"/about-me"}>
        <button
          className="text-zinc-100 text-md md:text-xl py-2 px-6 
        rounded-xl font-md hover:scale-110 active:scale-95 duration-500 
        hover:bg-zinc-800 active:bg-zinc-900/hover:bg-zinc-800"
        >
          About me
        </button>
      </Link>
      <Link href={"/contact"}>
        <button
          className="text-zinc-100 text-md md:text-xl py-2 px-6 
        rounded-xl font-md hover:scale-110 active:scale-95 duration-500 
        hover:bg-zinc-800 active:bg-zinc-900/hover:bg-zinc-800"
        >
          Contact
        </button>
      </Link>
    </header>
  );
}
