"use client";

import Title from "@/components/atoms/Title";
import Link from "next/link";
import React, { useState } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillMail,
  AiFillCopy,
} from "react-icons/ai";

export default function Contact() {
  const [showCopyMessage, setShowCopyMessage] = useState<boolean>();

  const copyValue = (val: string) => {
    // Create a "hidden" input
    var aux = document.createElement("input");

    // Assign it the value of the specified element
    aux.setAttribute("value", val);

    // Append it to the body
    document.body.appendChild(aux);

    // Highlight its content
    aux.select();

    // Copy the highlighted text
    document.execCommand("copy");

    // Remove it from the body
    document.body.removeChild(aux);
  };

  return (
    <div className="flex w-11/12 mx-auto flex-col text-center gap-4 justify-center items-center py-28">
      <Title gradient>Contact</Title>
      <div className="flex gap-4 flex-wrap w-full justify-center items-center">
        <Link
          className="glass-dark select-none md:w-1/3 w-full p-5 rounded-xl text-xl hover:bg-zinc-900 active:bg-zinc-900
        hover:scale-105 active:scale-95 duration-500 flex items-center gap-2"
          target="_blank"
          href="https://github.com/brcls"
        >
          <AiFillGithub size={40} />
          GitHub
        </Link>
        <Link
          className="glass-dark select-none md:w-1/3 w-full p-5 rounded-xl text-xl hover:bg-zinc-900 active:bg-zinc-900
        hover:scale-105 active:scale-95 duration-500 flex items-center gap-2"
          target="_blank"
          href="https://www.linkedin.com/in/brcls/"
        >
          <AiFillLinkedin size={40} />
          LinkedIn
        </Link>
        <Link
          className="glass-dark select-none md:w-1/3 w-full p-5 rounded-xl text-xl hover:bg-zinc-900 active:bg-zinc-900
        hover:scale-105 active:scale-95 duration-500 flex items-center gap-2"
          target="_blank"
          href="https://instagram.com/rckbrcls"
        >
          <AiFillInstagram size={40} />
          Instagram
        </Link>
        <Link
          className="glass-dark select-none md:w-1/3 w-full p-5 rounded-xl text-xl hover:bg-zinc-900 active:bg-zinc-900
        hover:scale-105 active:scale-95 duration-500 flex items-center justify-between"
          href="mailto:erickbarcelosdev@gmail.com?subject=Let's work together!"
          onClick={() => {
            setShowCopyMessage(true);
            setTimeout(() => setShowCopyMessage(false), 2000);
            copyValue("erickbarcelosdev@gmail.com");
          }}
        >
          <div className="flex items-center gap-2">
            <AiFillMail size={40} />
            E-mail
          </div>
          {showCopyMessage && <p>Copied!</p>}
        </Link>
      </div>
    </div>
  );
}
