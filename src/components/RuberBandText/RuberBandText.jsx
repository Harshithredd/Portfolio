import React, { useState } from "react";

import TextSpan from "./TextSpan";

const RuberBandText = ({ text, className = "" }) => {
  const sentence = text?.trim().split("");

  return (
    <div
      className={`w-full mx-auto py-2 flex items-center justify-start  overflow-hidden `}
    >
      {sentence.map((letter, index) => {
        return (
          <TextSpan
            key={`${index}_${letter}`}
            className={className}
            shadow={`${
              letter === "H"
                ? `dark:[text-shadow:_5px_5px_0px_rgb(182_62_150/_100%)] dark:md:[text-shadow:_2px_2px_0px_rgb(182_62_150/_100%)]
                [text-shadow:_4px_4px_0px_rgb(88_230_217/_100%)] md:[text-shadow:_2px_2px_0px_rgb(88_230_217/_100%)]
                font-outline-2 md:font-outline-1 dark:font-outline-black-2 dark:md:font-outline-1` 
                : null
            }`}
          >
            {letter === " " ? "\u00A0" : letter}
          </TextSpan>
        );
      })}
    </div>
  );
};

export default RuberBandText;