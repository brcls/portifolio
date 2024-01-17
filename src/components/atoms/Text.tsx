import React, { ReactNode } from "react";
import { ClassNameValue, twMerge } from "tailwind-merge";

export default function Text({
  children,
  className,
  gradient,
}: {
  children?: ReactNode;
  className?: ClassNameValue;
  gradient?: boolean;
}) {
  return (
    <p
      className={twMerge(
        `text-md md:text-lg
        ${
          gradient &&
          "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 bg-clip-text inline-block text-transparent"
        }`,
        className
      )}
    >
      {children}
    </p>
  );
}
