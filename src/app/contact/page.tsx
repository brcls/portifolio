"use client";

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
    <div className="flex mx-auto w-4/5 flex-col text-center gap-4 justify-center items-center py-20">
      <p className="text-5xl md:text-6xl font-bold mb-4">Contact</p>
      <Link
        className="glass-dark select-none w-full px-4 py-4 rounded hover:bg-zinc-900 active:bg-zinc-900
        hover:scale-105 active:scale-95 duration-500 flex items-center gap-2"
        href="https://github.com/brcls"
      >
        <AiFillGithub size={30} />
        GitHub
      </Link>
      <Link
        className="glass-dark select-none w-full px-4 py-4 rounded hover:bg-zinc-900 active:bg-zinc-900
        hover:scale-105 active:scale-95 duration-500 flex items-center gap-2"
        href="https://www.linkedin.com/in/brcls/"
      >
        <AiFillLinkedin size={30} />
        LinkedIn
      </Link>
      <Link
        className="glass-dark select-none w-full px-4 py-4 rounded hover:bg-zinc-900 active:bg-zinc-900
        hover:scale-105 active:scale-95 duration-500 flex items-center gap-2"
        href="https://instagram.com"
      >
        <AiFillInstagram size={30} />
        Instagram
      </Link>
      <Link
        className="glass-dark select-none w-full px-4 py-4 rounded hover:bg-zinc-900 active:bg-zinc-900
        hover:scale-105 active:scale-95 duration-500 flex items-center justify-between"
        href="mailto:erickbarcelosdev@gmail.com?subject=Let's work together!"
        onClick={() => {
          setShowCopyMessage(true);
          setTimeout(() => setShowCopyMessage(false), 2000);
          copyValue("erickbarcelosdev@gmail.com");
        }}
      >
        <div className="flex items-center gap-2">
          <AiFillMail size={30} />
          E-mail
        </div>
        {showCopyMessage && <p>Copied!</p>}
      </Link>
    </div>
  );
}
