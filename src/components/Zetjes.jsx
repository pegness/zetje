/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, Component } from 'react';
import { Button } from 'antd';
import CurrencyFormat from 'react-currency-format';
import ZetjeDetails from './ZetjeDetails';
import getCompletedTransactions from '../lib/getCompletedTransactions';
import getDonationsSum from '../lib/getDonationsSum';
import getDonationAmount from '../api/getDonationAmount';

const Zetjes = (props) => {
  const { allZetjes } = props;
  //debugger;
  const defaultAmount = 0;
  const [totalDonationsAmount, setTotalDonationsAmount] = useState();

  const success = (data) => {
    setTotalDonationsAmount(data.totalDonated);
  };

  const failure = (e) => {
    alert('something went wrong');
  };

  const [expandedZetje, setExpandedZetje] = useState();
  const token = localStorage.getItem('token');
  getDonationAmount(token, success, failure);

  const getName = () => {
    if (localStorage.getItem('name') === null) {
      return '';
    }
    return ', ' + localStorage.getItem('name');
  };

  let zetjesList;

  if (allZetjes && allZetjes.length !== 0) {
    zetjesList = allZetjes.map(zetje => (    
      <div key={zetje.id} className="zetje" onClick={() => setExpandedZetje(zetje.id)}>
        <div className="row">       
          <h3 className="title">
            {zetje.description}
          </h3>
          <h3 className="amount">
            <CurrencyFormat
              value={zetje.totalAmount / 100}
              displayType="text"
              decimalScale={2}
              fixedDecimalScale
              decimalSeparator=","
              prefix="€"
            />
          </h3>
        </div>
        <div className="">
          <p className="paid">
            {getCompletedTransactions(zetje).length} keer betaald
          </p>
          <p className="donation">
            Samen {' '}
            <CurrencyFormat
              value={(getDonationsSum(zetje)) / 100}
              displayType="text"
              decimalScale={2}
              fixedDecimalScale
              decimalSeparator=","
              prefix="€"
            /> gedoneerd

          </p>
        </div>
        {zetje.id === expandedZetje && (
          <ZetjeDetails
            zetje={zetje}
          />
        )}
      </div>
    ));
  } else {
    zetjesList = (
      <div className="first-zetje">Geweldig, nu alleen nog je eerste Zetje aanmaken. Klik op de &#43; knop onderin. Makkelijk, toch?
      </div>
    );
  }

  return (
    <div className="zetjes">
      <div className="donations-sum">
        <p>
          Leuk dat je Zetje gebruikt{getName()}!
          <br />Je hebt al
          <b>
            <CurrencyFormat
              value={totalDonationsAmount / 100}
              displayType="text"
              decimalScale={2}
              fixedDecimalScale
              decimalSeparator=","
              prefix=" €"
            />
          </b> gedoneerd.
        </p>
      </div>

      {zetjesList}

    </div>
  );
};

export default Zetjes;
