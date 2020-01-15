import React, { useState } from 'react';
import tagManager from '../lib/googleTagManager';

const Amount = (props) => {
  const [error, setError] = useState(false);

  const {
    setCurrentStep,
    totalAmount,
    setTotalAmount,
  } = props;

  const handleSubmit = (e) => {
    if (totalAmount && !isNaN(totalAmount)) {
      if (totalAmount > 24900) {
        setError('Je kan maximaal € 249 per Zetje terugvragen');
        tagManager({ event: 'error', field: 'maxAmount' });
      } else {
        setCurrentStep(2);
        setError(false);
        tagManager({ event: 'pageView', pageName: 'name' });
      }
    } else {
      setError('Vul alsjeblieft een getal in met max 2 cijfers achter de komma');
      tagManager({ event: 'error', field: 'totalAmount' });
    }

    e.preventDefault();
  };

  return (
    <div className="amount">
      <h3 className="mt-0">
        Hoeveel wil je terugvragen per persoon?
      </h3>

      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          value={totalAmount ? totalAmount / 100 : ''}
          type="number"
          min="0"
          step="0.01"
          placeholder="€0,00"
          className="input inline"
          onChange={e => setTotalAmount(e.target.value * 100)}
        />

        <input
          type="submit"
          value="Verder"
          className="button submit inline"
        />
      </form>

      <p
        className="error-message"
        style={{ display: error ? 'block' : 'none' }}
      >
        {error}
      </p>
    </div>
  );
};

export default Amount;
