import React from "react";

export default function AboutMe() {
  return (
    <div className="flex flex-col text-center gap-4 py-28 w-11/12 mx-auto">
      <p
        className="text-8xl md:text-9xl font-bold bg-gradient-to-br
         from-indigo-500 via-purple-500 to-pink-500 bg-clip-text pb-4 inline-block 
         text-transparent mb-4"
      >
        About me
      </p>
      <div className="grid auto-rows-[320px] md:grid-cols-3 grid-cols-2 gap-4 w-full">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`row-span-1 rounded-xl p-4 glass-dark ${
              i === 0 || i === 3 ? "col-span-2" : ""
            } ${i === 2 ? "md:row-span-2" : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );
}
