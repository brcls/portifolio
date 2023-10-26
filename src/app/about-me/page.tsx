import React from "react";

export default function AboutMe() {
  return (
    <div className="flex flex-col text-center gap-4 py-20 w-11/12 md:w-3/4 mx-auto">
      <p className="text-5xl md:text-6xl font-bold mb-4">About me</p>
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
