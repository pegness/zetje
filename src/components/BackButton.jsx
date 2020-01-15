import React from 'react';

const BackButton = (props) => {
  const {
    currentStep,
    setCurrentStep,
  } = props;

  if (currentStep === 0 || currentStep === 5) {
    return null;
  }

  return (
    <div className="back-button">
      <div className="button secondary" onClick={() => setCurrentStep(currentStep - 1)}>
        Terug
      </div>
    </div>
  );
};

export default BackButton;
