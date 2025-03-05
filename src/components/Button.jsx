import React from "react";

export default function Button({text, handlePrevious, handleNext}) {
  return (
    <>
      <button onClick={text === 'Previous' ? handlePrevious : handleNext}>
        <span>{text}</span>
      </button>
    </>
  );
}