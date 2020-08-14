/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import { Button, Spin, Checkbox } from 'antd';
import CurrencyFormat from 'react-currency-format';
import tagManager from '../lib/googleTagManager';
import Logo from './Logo';
import BankDropdown from './BankDropdown';
import getZetjePaymentLink from '../api/getZetjePaymentLink';
import getZetje from '../api/getZetje';
import DonationSlider from './DonationSlider';
import { Accordion, AccordionItem } from 'react-light-accordion';

//import Profile from './ProfileGenerator';


const PayDonate = ({ formData, setForm, navigation, id, code, extraDonation, setExtraDonation }) => {

  const { next } = navigation;

  const defaultBankValue = 'Select an option';
  
  const [bank, setBank] = useState(defaultBankValue);
  const [errorBank, setErrorBank] = useState(false);
  const [errorServer, setErrorServer] = useState(false);
  const [loadingPayLink, setLoadingPayLink] = useState(false);
  const [loadingZetje, setLoadingZetje] = useState(false);
  const [zetje, setZetje] = useState(true);
  const [donationPercentage, setDonationPercentage] = useState(5);

  const {
    totalAmount,
    donationAmount,
    description,
    firstName,
  } = zetje;

  const profiles = {
    0: {
      name: 'Alice',
      url: 'https://http://littlebitz-web.production.devinc.eu/donate/pictures/HC_164690.jpg',
    },
    1: {
      name: 'Lydiah',
      url: 'http://littlebitz-web.production.devinc.eu/donate/pictures/HC_185008.jpg',
    },
    2: {
      name: 'Celestine',
      url: 'http://littlebitz-web.production.devinc.eu/donate/pictures/HC_683093.jpg',
    },
    3: {
      name: 'Harriet',
      url: 'http://littlebitz-web.production.devinc.eu/donate/pictures/HC_830383.jpg',
    }
  };

  const getRandomNumber = () => {
    const total = 4;
    const divided = id % total;
    return divided;
  };

  const success = (response) => {
    setZetje(response);
    setLoadingZetje(false);
    const perc = response.donationAmount / response.totalAmount * 100;
    setDonationPercentage(perc);
    setExtraDonation(response.totalAmount / 100 / 100 * perc);
    //debugger;
  };

  const failure = (error) => {
    tagManager({ event: 'serverError', field: 'getZetje' });
    console.log("failed");
    errorServer(true);
  };

  useEffect(() => {
    tagManager({ event: 'pageView', pageName: 'payDonate' });
    getZetje(id, code, success, failurePayLink);
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

  const onDonationChange = (e) => {
    setDonationPercentage(e);
    setExtraDonation(e / 100 * (totalAmount / 100));
    //debugger
    //e.preventDefault();
  };

  const onNext = (e) => {
    setExtraDonation(0);
    //debugger;
    next(e);
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
      <div className="payWrapper">
        <div className="payDescription">
          <div className="wrapper">
            <p className="">
              Hey there,<br/><br/>
              Betaal mij <span className="">€{createEuroAmount(totalAmount)}</span> voor <br/>'{description}'.
            <br/>
            {donationAmount > 0 &&
            <span>Ik doneer hiervan €{createEuroAmount(donationAmount)}, jij ook?</span>
            
          }</p><p>Groetjes {firstName}{' '} </p>
        </div>
        <Accordion atomic={true}>
          <AccordionItem title="* Of kies zelf een percentage van het bedrag hier">
          
              <p className="smaller">
              </p>
            
            <DonationSlider
              onChange={e => onDonationChange(e)}
              defaultValue={donationPercentage}
              handleColor="#ffffff"
              trackColor="#ffffff"
            />
            <div className="wrapper"><p className="smaller">Doneer {donationPercentage}% en steun iemand die het goed kan gebruiken met <CurrencyFormat
              value={(donationPercentage / 100 * (totalAmount / 100))}
              displayType="text"
              decimalScale={2}
              fixedDecimalScale
              decimalSeparator=","
              prefix="€"
          /></p></div>
          </AccordionItem>
        </Accordion>
        
        
        
        </div>
      </div>
      <div className="">
        <div className="payButtonWrapper">
          <Button
            type="primary"
            size="large"
            onClick={next}
            //loading={loading}
            className="button primary stacked"
          >
            Ja graag!<br/><span className="subtext">(en betaal €{createEuroAmount(totalAmount + (donationPercentage * totalAmount / 100))})</span>
          </Button>
          
        </div>
        <p></p>
        <div className="payButtonWrapper">
          <Button
            type="primary"
            size="large"
            onClick={onNext}
            className="button primary reverse"
          >
          Nee dank je<br/><span className="subtext">(en betaal €{createEuroAmount(totalAmount)})</span>
        </Button>
        </div>
      </div>
      <p></p>
      <div
        className="error-message"
        style={{ display: errorServer ? 'block' : 'none' }}
      >
        <Logo />
        <p>Hmmm.. dit Zetje kunnen we niet meer vinden. Vraag je een nieuwe link bij degene die je dit Zetje stuurde? <br /><br />Heb je een ander probleem? Stuur een <a href="https://wa.me/31629457934">WhatsApp</a> of een <a href="mailto:hello@zetje.org">mailtje</a>.</p>
      </div>
      <hr/>
      <div>
        <p className="bigger"><b>Wie help je deze maand met een zetje?</b></p>
        <p>Je helpt vrouwen in extreme armoede, zoals {profiles[getRandomNumber()].name} in Kenia. Met jouw bijdrage betalen ze hun zorgverzekering via onze partner HealthConnect.</p>
    </div>
      <div><img className="" src={profiles[getRandomNumber()].url} alt="zetje-logo" width="100%" /></div>
      {/* <div className="">
        <img className="" src="/img/gd-grid.jpg" alt="grid" width="320" />
        <div className="profile-left">
          <img className="" src={profiles[getRandomNumber()].url} alt="zetje-logo" width="100%" />
        </div>
        <div className="profile-right">{firstName} geeft €{createEuroAmount(donationAmount)} daarvan rechtstreeks aan <b>{profiles[getRandomNumber()].name}</b> in Kenia. {profiles[getRandomNumber()].name} is geselecteerd voor een basisinkomen door GiveDirectly.</div>
      </div>
      <hr/>
      <div className="opp-data">Door gebruik van Zetje ga je akkoord met de <a href="/terms">voorwaarden</a>. </div>
      <Checkbox
        name="double"
      > <span className="check-label">Ja, ik wil ook €{createEuroAmount(donationAmount)} doneren!</span>
      </Checkbox><Slider />*/}
    </div>
  );
};

export default PayDonate;
