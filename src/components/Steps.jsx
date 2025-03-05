import React from "react";

export default function Steps({step}) {  
  return (
    <div className="numbers">
      <div className={step >= 1 ? 'active' : ''}>
        <span>1</span>
      </div>
      <div className={step >= 2 ? 'active' : ''}>
        <span>2</span>
      </div>
      <div className={step >= 3 ? 'active' : ''}>
        <span>3</span>
      </div>
    </div>
  );
}