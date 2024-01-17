"use client";

import React, { useState } from "react";
import Text from "./Text";
import classNames from "classnames";

const Alert = () => {
  const [showAlert, setShowAlert] = useState(true);
  const [animate, setAnimate] = useState(false);

  const handleClose = () => {
    setAnimate(true);
    setTimeout(() => setShowAlert(false), 600);
  };

  const alertContainerClass = classNames(
    "p-4 z-50 glass-dark border-none fixed bottom-4 right-1/2",
    "w-11/12 translate-x-1/2 flex md:flex-row flex-col justify-between text-start items-center",
    "rounded-xl gap-4 transition duration-700 transform",
    { "opacity-0 scale-90": animate }
  );

  const buttonClass = classNames(
    "py-2 px-4 rounded-full hover:scale-105 active:scale-95 transition duration-500",
    "hover:bg-zinc-800 active:bg-zinc-900 border-zinc-100/20 border-2 md:w-min w-full"
  );

  return (
    <>
      {showAlert && (
        <div className={alertContainerClass}>
          <Text>
            This portfolio is a work in progress, but rest assured, one day it
            will be a polished masterpiece! 😉
          </Text>
          <button className={buttonClass} onClick={handleClose}>
            <Text>Close</Text>
          </button>
        </div>
      )}
    </>
  );
};

export default Alert;
