import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header
      className="bg-zinc-700 backdrop-filter backdrop-blur-sm bg-opacity-25 
                    flex mt-4 justify-center items-center gap-2 
                    p-1 md:w-1/2 inset-x-0 mx-auto rounded-full fixed z-10
                    w-11/12"
    >
      <Link href={"/"}>
        <button
          className="text-zinc-100 py-2 px-6 
        rounded-full font-bold hover:scale-110 duration-500 
        hover:bg-zinc-900 active:scale-95"
        >
          Projects
        </button>
      </Link>
      <Link href={"/about-me"}>
        <button
          className="text-zinc-100 py-2 px-6 
        rounded-full font-bold hover:scale-110 duration-500 
        hover:bg-zinc-900 active:scale-95"
        >
          About me
        </button>
      </Link>
      <Link href={"/contact"}>
        <button
          className="text-zinc-100 py-2 px-6 
        rounded-full font-bold hover:scale-110 duration-500 
        hover:bg-zinc-900 active:scale-95"
        >
          Contact
        </button>
      </Link>
    </header>
  );
}
