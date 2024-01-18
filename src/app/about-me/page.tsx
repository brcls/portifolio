import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
import React from "react";
import MeAndOroru from "../../../public/images/assets/me-and-ororu.jpg";
import Ororu from "../../../public/images/assets/ororu.png";
import Landscape from "../../../public/images/assets/landscape.jpg";
import Image from "next/image";
import { IBox } from "@/interface/IBox";
import SubTitle from "@/components/atoms/SubTitle";
import { twMerge } from "tailwind-merge";

export default function AboutMe() {
  // Lista de objetos representando as caixas
  const boxes: IBox[] = [
    {
      className: "md:col-span-2",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tenetur unde quae earum! 
      Illo ipsam nam officiis quis laborum quod ratione cupiditate quaerat earum. Aliquam delectus 
      consequatur maxime fugit. Quos?`,
    },
    { image: MeAndOroru },
    {
      className: "md:row-span-2",
      image: Ororu,
    },
    {
      className: "md:col-span-2",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tenetur unde quae earum! 
      Illo ipsam nam officiis quis laborum quod ratione cupiditate quaerat earum. Aliquam delectus 
      consequatur maxime fugit. Quos?`,
    },
    { className: "md:col-span-2", image: Landscape },
    {
      className: "md:col-span-2",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tenetur unde quae earum! 
      Illo ipsam nam officiis quis laborum quod ratione cupiditate quaerat earum. Aliquam delectus 
      consequatur maxime fugit. Quos?`,
    },
    { className: "md:col-span-1", image: Landscape },
    { className: "md:col-span-1", image: Landscape },
    {
      className: "md:col-span-2",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tenetur unde quae earum! 
      Illo ipsam nam officiis quis laborum quod ratione cupiditate quaerat earum. Aliquam delectus 
      consequatur maxime fugit. Quos?`,
    },
  ];

  return (
    <div className="flex flex-col text-center gap-4 py-28 w-11/12 mx-auto">
      <Title gradient>About me</Title>
      <div className="grid auto-rows-[70svh] md:grid-cols-3 gap-4 w-full">
        {boxes.map((box, i) => (
          <div
            key={i}
            className={twMerge(
              `flex items-center overflow-hidden
             row-span-1 rounded-xl glass-dark text-start`,
              box?.className
            )}
          >
            {box.image && (
              <div className="w-full h-full relative">
                <Image
                  className="select-none"
                  src={box.image}
                  alt="me"
                  fill
                  style={{ objectFit: "cover", objectPosition: "right" }}
                  priority
                  quality={100}
                />
              </div>
            )}
            {box.text && <SubTitle className="m-6">{box.text}</SubTitle>}
          </div>
        ))}
      </div>
    </div>
  );
}
