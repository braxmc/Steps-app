import React from "react";

import Button from './Button.jsx'

export default function Buttons({handlePrevious, handleNext}) {
  return (
    <div className="buttons">
      <Button text="Previous" handlePrevious={handlePrevious} />
      <Button text="Next" handleNext={handleNext} />
    </div>    
  );
}