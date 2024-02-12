import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
import React from "react";
import Ororu from "../../../public/images/about-me/ororu.jpg";
import OroruLaid from "../../../public/images/about-me/ororu-laid.png";
import Draw2D from "../../../public/images/about-me/2D.png";
import DrawPrimal from "../../../public/images/about-me/primal.png";
import Sea from "../../../public/images/about-me/sea.jpg";
import Me from "../../../public/images/about-me/me-and-sea.jpg";
import Rio from "../../../public/images/about-me/pao-de-acucar.jpg";
import Image from "next/image";
import { IBox } from "@/interface/IBox";
import SubTitle from "@/components/atoms/SubTitle";
import { twMerge } from "tailwind-merge";
import { FaArrowAltCircleDown, FaFileDownload } from "react-icons/fa";
import Link from "next/link";

export default function AboutMe() {
  // Lista de objetos representando as caixas
  const boxes: IBox[] = [
    {
      className: "md:col-span-2",
      text: `As a software engineering professional, 
      I'm driven by innovation and technology's ever-changing landscape. 
      I constantly seek new solutions, ensuring I stay ahead in this dynamic field.`,
    },
    { image: Me, align: "left" },
    {
      className: "md:row-span-2",
      image: Sea,
      align: "left",
    },
    {
      className: "md:col-span-2",
      text: `In my personal life, I cherish Ororu, my affectionate pitbull. Her joyful presence brings me endless happiness and companionship.`,
      align: "right",
    },
    { className: "md:col-span-2", image: DrawPrimal, align: "bottom" },
    {
      className: "md:col-span-2",
      text: `I'm passionate about both art and sports. Creativity is my outlet for self-expression, while sports help me maintain a healthy balance of mind and body.`,
    },
    { className: "md:col-span-1", image: Ororu },
    { className: "md:col-span-1", image: Draw2D },
    {
      className: "md:col-span-2",
      text: `Beyond technology, I love traveling to beaches and natural wonders. Exploring new horizons brings me profound joy and serenity.`,
      align: "right",
    },
    {
      className: "md:col-span-2",
      image: Rio,
    },
    {
      className: "md:col-span-1",
      image: OroruLaid,
    },
  ];

  return (
    <div className="flex flex-col text-center gap-4 w-11/12 mx-auto mb-24">
      <div className="h-[100svh] flex flex-col justify-center text-center items-center gap-4 w-full">
        <div className="flex flex-col gap-10 justify-center items-center w-full">
          <Title gradient>About me</Title>
          <a
            className="glass-dark md:w-1/4 w-full px-10 py-4 rounded hover:bg-zinc-900 active:bg-zinc-900
              hover:scale-105 active:scale-95 duration-500 flex items-center justify-center gap-2"
            href="/files/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFileDownload size={30} />
            <Text>Resume</Text>
          </a>
        </div>
        <FaArrowAltCircleDown
          size={30}
          className="animate-bounce absolute bottom-10"
        />
      </div>
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
                  style={{ objectFit: "cover", objectPosition: box.align }}
                  priority
                  quality={100}
                />
              </div>
            )}
            {box.text && (
              <SubTitle
                className={`m-6 ${
                  box?.align === "right"
                    ? "text-right"
                    : box?.align === "center"
                    ? "text-center"
                    : "text-left"
                }`}
              >
                {box.text}
              </SubTitle>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
