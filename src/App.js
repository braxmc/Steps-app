import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handleNextStepChange() {
    if (step < 3) {
      setStep(step + 1);
    }
  }

  function handlePrevStepChange() {
    if (step > 1) {
      setStep(step - 1);
    }
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>x</button>
      {isOpen && (
        <div className="steps">
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
          <div className="message">
            <span>Step {step}: {messages[step - 1]}</span>
          </div>
          <div className="buttons">
            <button>
              <span onClick={handlePrevStepChange}>Previous</span>
            </button>
            <button onClick={handleNextStepChange}>
              <span>Next</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
