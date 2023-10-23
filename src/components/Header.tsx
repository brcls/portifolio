import React from "react";

export default function Header() {
  return (
    <header
      className="bg-zinc-700 backdrop-filter backdrop-blur-md bg-opacity-50 
                    flex mt-4 justify-center align-middle gap-2 
                    p-1 w-1/2 mx-auto rounded-full"
    >
      <button
        className="btn btn-ghost lowercase text-zinc-100 py-1 px-6 
      rounded-full font-bold"
      >
        home
      </button>
      <button
        className="btn btn-ghost lowercase text-zinc-100 py-1 px-6 
      rounded-full font-bold"
      >
        contact
      </button>
    </header>
  );
}
