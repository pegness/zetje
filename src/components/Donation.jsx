/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { Button } from 'antd';
import CurrencyFormat from 'react-currency-format';
import DonationSlider from './DonationSlider';
import tagManager from '../lib/googleTagManager';
import createZetje from '../api/createZetje';

const Donation = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const {
    setCurrentStep,
    setZetje,
    setDonationPercentage,
    donationPercentage,
    donationAmount,
    totalAmount,
    description,
  } = props;

  const token = localStorage.getItem('token');

  const success = (data) => {
    setZetje(data);
    setCurrentStep(4);
    setLoading(false);
  };

  const failure = (e) => {
    tagManager({ event: 'serverError', field: 'createZetje' });
    setError(true);
    setLoading(false);
  };

  const handleSubmit = () => {
    setLoading(true);

    const data = {
      totalAmount,
      donationAmount,
      description,
    };
    createZetje(data, token, success, failure);
  };

  return (
    <div className="donation">

      <h3 className="donation-percentage mt-0">
        Ontvang&nbsp;
        <CurrencyFormat
          value={((totalAmount - donationAmount) / 100)}
          displayType="text"
          decimalScale={2}
          fixedDecimalScale
          decimalSeparator=","
          prefix="€"
        />
       &nbsp;per vriend...
      </h3>

      <h1>
        Doneer {donationPercentage}%
      </h1>

      <DonationSlider
        onChange={setDonationPercentage}
        defaultValue={donationPercentage}
      />
      <h3>en steun iemand die het goed kan gebruiken met&nbsp;
        <CurrencyFormat
          value={(donationAmount / 100)}
          displayType="text"
          decimalScale={2}
          fixedDecimalScale
          decimalSeparator=","
          prefix="€ "
        />
      </h3>

      <Button
        type="primary"
        size="large"
        onClick={handleSubmit}
        loading={loading}
        className="button primary stacked"
      >
        Verder
      </Button>

      <p style={{ display: error ? 'block' : 'none' }}>
        Oh oh, er is iets misgegaan op de server. Probeer het later opnieuw of neem contact op via info@zetje.org.
      </p>

    </div>
  );
};

export default Donation;
