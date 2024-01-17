import Title from "@/components/atoms/Title";
import React from "react";

export default function AboutMe() {
  return (
    <div className="flex flex-col text-center gap-4 py-28 w-11/12 mx-auto">
      <Title gradient>About me</Title>
      <div className="grid auto-rows-[50svh] md:grid-cols-3 gap-4 w-full">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`row-span-1 rounded-xl p-4 glass-dark ${
              i === 0 || i === 3 || i === 4 ? "md:col-span-2" : ""
            } ${i === 2 ? "md:row-span-2" : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );
}
