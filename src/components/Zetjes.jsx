/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import ZetjeDetails from './ZetjeDetails';
import getDonationsSum from '../lib/getDonationsSum';
import getCompletedTransactions from '../lib/getCompletedTransactions';

const Zetjes = (props) => {
  const { allZetjes } = props;

  const [expandedZetje, setExpandedZetje] = useState();

  const donationsSum = getDonationsSum(allZetjes);

  let name = '';
  if (localStorage.getItem('name') !== 'undefined') {
    name = ', ' + localStorage.getItem('name');
  }

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
        <div className="row">
          <p className="paid">
            {getCompletedTransactions(zetje).length} keer betaald
          </p>
          <p className="donation">
            <CurrencyFormat
              value={(zetje.donationAmount * (getCompletedTransactions(zetje).length)) / 100}
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
      <div className="first-zetje">
      Geweldig, nu alleen nog je eerste Zetje aanmaken. Klik op de &#43; knop onderin. Makkelijk, toch?
      </div>
    );
  }

  return (
    <div className="zetjes">
      <div className="donations-sum">
        <p>
          Leuk dat je Zetje gebruikt{name}!
          <br />Je hebt al
          <b>
            <CurrencyFormat
              value={donationsSum / 100}
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
