/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import { Button, Spin, Checkbox } from 'antd';
import tagManager from '../lib/googleTagManager';
import Logo from './Logo';
import BankDropdown from './BankDropdown';
import getZetjePaymentLink from '../api/getZetjePaymentLink';
import getZetje from '../api/getZetje';
//import Slider from './DonationSlider';
//import Profile from './ProfileGenerator';


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
  const [extraDonation, setExtraDonation] = useState(0);

  const {
    totalAmount,
    donationAmount,
    description,
    firstName,
  } = zetje;

  const profiles = {
    0: {
      name: 'Siribia',
      url: 'https://s3-us-west-2.amazonaws.com/gdlive-images-prod/uploads/profile_headshot_786f41ec-92be-4543-aca9-5b2dd3338db1',
    },
    1: {
      name: 'Imelda',
      url: 'https://s3-us-west-2.amazonaws.com/gdlive-images-prod/uploads/profile_headshot_82e9c11c-c930-4153-8ac4-8780d9a72e2a',
    },
    2: {
      name: 'Selin',
      url: 'https://s3-us-west-2.amazonaws.com/gdlive-images-prod/uploads/profile_headshot_7dc64bf7-42ee-4b5e-b999-cb84176ad296',
    },
    3: {
      name: 'Lidia',
      url: 'https://s3-us-west-2.amazonaws.com/gdlive-images-prod/uploads/profile_headshot_cd8a3046-b0e6-4db4-9084-508578f1e964',
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
  };

  const failure = (error) => {
    tagManager({ event: 'serverError', field: 'getZetje' });
    console.log("failed");
    errorServer(true);
  };

  useEffect(() => {
    tagManager({ event: 'pageView', pageName: 'pay' });
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

  const onAmountChange = (amount) => {
    setExtraDonation(amount);
  }

  const handleSubmit = () => {
    if (bank !== defaultBankValue) {
      setErrorBank(false);
      setLoadingPayLink(true);
      getZetjePaymentLink(id, code, extraDonation, successPayLink, failurePayLink);
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
        <div style={{ display: errorServer ? 'none' : 'block' }}>
          <Logo />
          <p className="bigger">
            <b>Betaal {firstName}{' '} <span className="">€{createEuroAmount(totalAmount)}</span> voor '{description}'.</b>          
          </p>
          <p>{firstName} doneert hiervan €{createEuroAmount(donationAmount)} :-)<br />
          Doneer je ook?</p>
          <form onSubmit={handleSubmit}>
            <input
              autoFocus
              type="number"
              min="0"
              step="0.01"
              placeholder="€0,00"
              className="input"
              onChange={e => onAmountChange(e.target.value * 100)}
            />
          </form>
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
          </div>
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
            <p>Mensen in extreme armoede zoals {profiles[getRandomNumber()].name} in Kenia. Zij ontvangen een basisinkomen via onze partner GiveDirectly.</p>
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
      </div>
    </div>
  );
};

export default Pay;
