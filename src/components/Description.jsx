import React, { useState } from 'react';
import tagManager from '../lib/googleTagManager';

const Description = (props) => {
  const [errorMessage, setErrorMessage] = useState(false);

  const {
    currentStep,
    description,
    setDescription,
    setCurrentStep,
  } = props;

  const handleSubmit = (e) => {
    if (description) {
      setCurrentStep(3);
      setErrorMessage(false);
      tagManager({ event: 'pageView', pageName: 'donation' });
    } else {
      setErrorMessage(true);
      tagManager({ event: 'error', field: 'description' });
    }

    e.preventDefault();
  };

  if (currentStep !== 2) {
    return null;
  }

  return (
    <div className="description">
      <h3 className="mt-0">
        Waarvoor is het?
      </h3>
      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          value={description}
          placeholder="Pizzaaaa"
          className="input stacked"
          maxLength="30"
          onChange={e => setDescription(e.target.value)}
        />

        <input
          type="submit"
          value="Verder"
          className="button submit stacked"
        />
      </form>

      <p
        className="error-message"
        style={{ display: errorMessage ? 'block' : 'none' }}
      >
        Vul een naam in
      </p>
    </div>
  );
};

export default Description;
