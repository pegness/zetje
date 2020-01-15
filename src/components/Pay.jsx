/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import { Button, Spin } from 'antd';
import tagManager from '../lib/googleTagManager';
import Logo from './Logo';
import BankDropdown from './BankDropdown';
import getZetjePaymentLink from '../api/getZetjePaymentLink';
import getZetje from '../api/getZetje';


const Pay = (props) => {
  const {
    id,
    code,
  } = props.match.params;

  const defaultBankValue = 'Select an option';

  const [bank, setBank] = useState(defaultBankValue);
  const [errorBank, setErrorBank] = useState(false);
  const [errorServer, setErrorServer] = useState(false);
  const [loadingPayLink, setLoadingPayLink] = useState(false);
  const [loadingZetje, setLoadingZetje] = useState(false);
  const [zetje, setZetje] = useState(true);

  const {
    totalAmount,
    donationAmount,
    description,
    firstName,
  } = zetje;

  const success = (response) => {
    setZetje(response);
    setLoadingZetje(false);
  };

  const failure = (e) => {
    console.log(e);
    tagManager({ event: 'serverError', field: 'getZetje' });
    errorServer(true);
  };

  useEffect(() => {
    tagManager({ event: 'pageView', pageName: 'pay' });
    getZetje(id, code, success, failure);
  },
  []);

  const successPayLink = (response) => {
    const url = `${response.redirectUrl}/${bank.bic}`;

    window.open(url, '_self');
  };

  const createEuroAmount = (amount) => {
    let finalAmount = 0;
    finalAmount = amount / 100;
    finalAmount = finalAmount.toFixed(2);
    return finalAmount.toString().replace('.', ',');
  };

  const failurePayLink = (e) => {
    console.log(e);
    tagManager({ event: 'serverError', field: 'pay' });
    setErrorServer(true);
    setLoadingPayLink(false);
  };

  const handleSubmit = () => {
    if (bank !== defaultBankValue) {
      setErrorBank(false);
      setLoadingPayLink(true);
      getZetjePaymentLink(id, code, successPayLink, failurePayLink);
    } else {
      setErrorBank(true);
      tagManager({ event: 'error', field: 'pay' });
    }
  };

  if (loadingZetje) {
    return (
      <div className="app">
        <div className="container">
          <div className="loading">
            <Logo />
            <Spin size="large" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="container">

        <div className="pay">
          <Logo />
          <p>
            <b>Betaal {firstName}{' '} €{createEuroAmount(totalAmount)} voor {description}.</b>
          </p>

          <p>
            {firstName} geeft €{createEuroAmount(donationAmount)} daarvan rechtstreeks aan iemand in Kenia.
          </p>

          <BankDropdown
            bank={bank}
            setBank={setBank}
          />

          <Button
            type="primary"
            size="large"
            onClick={handleSubmit}
            loading={loadingPayLink}
            className="button primary"
          >
            Betaal met iDEAL
          </Button>
          <div className="opp-data">Veilig betalen met <img src="/img/opp_logo.png" width="100" alt="" className="image-2" /><br/>van MediaMedics BV </div>
          <div className="opp-data">Door gebruik van Zetje ga je akkoord met de voorwaarden.</div>
          <p
            className="error-message"
            style={{ display: errorBank ? 'block' : 'none' }}
          >
            Kies je bank
          </p>

          <p
            className="error-message"
            style={{ display: errorServer ? 'block' : 'none' }}
          >
            Oh oh, er is iets misgegaan op de server. Probeer het later opnieuw of neem contact op via hello@zetje.org.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Pay;
