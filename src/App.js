import { useState } from "react";

import Steps from './components/Steps.jsx';
import Message from './components/Message.jsx';
import Buttons from './components/Buttons.jsx';

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handleNextStepChange() {
    if (step < 3) {
      setStep((stp) => stp + 1);
    }
  }

  function handlePrevStepChange() {
    if (step > 1) {
      setStep((stp) => stp - 1);
    }
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((open) => !open)}>x</button>
      {isOpen && (
        <div className="steps">
          <Steps step={step}/>
          <Message step={step}/>
          <Buttons step={step} handlePrevious={handlePrevStepChange} handleNext={handleNextStepChange} />
        </div>
      )}
    </>
  );
}

export default App;
