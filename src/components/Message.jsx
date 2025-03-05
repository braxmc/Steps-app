import React from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function Message({step}) {
  return (
    <>
      <div className="message">
        <span>Step {step}: {messages[step - 1]}</span>
      </div>
    </>
  );
}