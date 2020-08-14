/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import { Button, Spin, Checkbox } from 'antd';
import CurrencyFormat from 'react-currency-format';
import tagManager from '../lib/googleTagManager';
import Logo from './Logo';
import BankDropdown from './BankDropdown';
import getZetjePaymentLink from '../api/getZetjePaymentLink';
import getZetje from '../api/getZetje';
//import Slider from './DonationSlider';
//import Profile from './ProfileGenerator';


const PayBank = ({ formData, setForm, navigation, id, code, extraDonation }) => {

  const defaultBankValue = 'Select an option';

  const [bank, setBank] = useState(defaultBankValue);
  const [errorBank, setErrorBank] = useState(false);
  const [errorServer, setErrorServer] = useState(false);
  const [loadingPayLink, setLoadingPayLink] = useState(false);
  const [loadingZetje, setLoadingZetje] = useState(false);
  const [zetje, setZetje] = useState(true);
  //const [extraDonation, setExtraDonation] = useState(0);


  const {
    totalAmount,
    donationAmount,
    description,
    firstName,
  } = zetje;


  const success = (response) => {
    setZetje(response);
    setLoadingZetje(false);
    //debugger;
  };

  useEffect(() => {
    tagManager({ event: 'pageView', pageName: 'payDonate' });
    getZetje(id, code, success);
  },
  []);

  const successPayLink = (response) => {
    const url = `${response.redirectUrl}/${bank.bic}`;
    //debugger;
    window.open(url, '_self');
  };

  const createEuroAmount = (amount) => {
    let finalAmount = 0;
    finalAmount = amount / 100;
    finalAmount = finalAmount.toFixed(2);
    return finalAmount.toString().replace('.', ',');
  };

  const failurePayLink = (e) => {
    //debugger
    //console.log(e);
    tagManager({ event: 'serverError', field: 'pay' });
    setErrorServer(true);
    setLoadingPayLink(false);
  };

  const handleSubmit = () => {
    if (bank !== defaultBankValue) {
      setErrorBank(false);
      setLoadingPayLink(true);
      const donation = extraDonation * 100;
      getZetjePaymentLink(id, code, donation, successPayLink, failurePayLink);
    } else {
      setErrorBank(true);
      tagManager({ event: 'error', field: 'pay' });
    }
  };

  const getExtraText = (amount) => {
    if (amount === 0) {
      return (
        <div>
          <p className="bigger">
            Je betaalt €{createEuroAmount(totalAmount)} aan {firstName}
          </p>
        </div>
      );
    }
    return (
      <div>
        <p className="bigger">
          Je betaalt in totaal €{createEuroAmount(totalAmount + (amount*100))}
        </p>
        <p>
        <div>€{createEuroAmount(totalAmount)} voor {firstName}</div>
        {amount > 0 &&
            <div>€{createEuroAmount(amount*100)} donatie</div> 
          }
        </p>
      
        {/*<p className="bigger extraDonate">
          En doe daar bovenop een donatie van  
          <CurrencyFormat
            value={amount}
            displayType="text"
            decimalScale={2}
            fixedDecimalScale
            decimalSeparator=","
            prefix=" €"
          />
        </p>*/}
      </div>
    );
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
    <div>
      {getExtraText(extraDonation)}
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
      <img src="/img/iDEAL_24x24.png" width="25" alt="" className="image-2" />&nbsp;  Betaal met iDEAL
      </Button>
      <div className="opp-data">Veilig betalen met <img src="/img/opp_logo.png" width="100" alt="" className="image-2" /><br/>van MediaMedics BV </div> 
      <p
        className="error-message"
        style={{ display: errorBank ? 'block' : 'none' }}
      >
        Kies je bank
      </p>
      <div
        className="error-message"
        style={{ display: errorServer ? 'block' : 'none' }}
      >
        
        <p>Hmmm.. dit Zetje kunnen we niet meer vinden. Vraag je een nieuwe link bij degene die je dit Zetje stuurde? <br /><br />Heb je een ander probleem? Stuur een <a href="https://wa.me/31629457934">WhatsApp</a> of een <a href="mailto:hello@zetje.org">mailtje</a>.</p>
      </div>
    </div>
  );
};

export default PayBank;
