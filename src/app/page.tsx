import Card from "@/components/Card";
import Header from "@/components/Header";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col justify-center align-middle text-center">
      <Header />
      <Image
        className="mx-auto"
        src="/me.png"
        alt="me"
        width={500}
        height={500}
        priority
        quality={100}
      />
      <p className="text-6xl text-bold">
        hello! i'am erick barcelos, software engineer
      </p>
      <div className="grid gap-10 my-10">
        {[0, 1, 2, 3].map((item) => (
          <Card />
        ))}
      </div>
    </div>
  );
}
