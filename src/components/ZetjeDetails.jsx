import React, { useState } from 'react';
import { Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import CurrencyFormat from 'react-currency-format';
import Share from './Share';
import getCompletedTransactions from '../lib/getCompletedTransactions';
import deleteZetje from '../api/deleteZetje';
import tagManager from '../lib/googleTagManager';

const ZetjeDetails = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { zetje } = props;

  const {
    totalAmount,
    donationAmount,
    description,
  } = zetje;

  const success = (data) => {
    tagManager({ event: 'serverError', field: 'deleteZetje' });
    //console.log('succesfully deleted');
    window.location.reload();
  };

  const failure = (e) => {
    tagManager({ event: 'serverError', field: 'deleteZetje' });
    setError(true);
    setLoading(false);
  };

  const token = localStorage.getItem('token');

  const deleteThisZetje = (zetjeId) => {
    if (window.confirm('Weet je zeker dat je dit zetje wilt verwijderen?')) {
      const data = {
        zetjeId,
      };
      //console.log(zetjeId);
      deleteZetje(data, token, success, failure);
    }
  };

  const getTransactionAmount = (amount) => {
    if (amount === 0) {
      return '';
    } else {
      return (
        <span>
        {' + '}
        <img src="img/icon-give-white@3x.png" width="20" alt="" />
        {/*<CurrencyFormat
          value={amount / 100}
          displayType="text"
          decimalScale={2}
          fixedDecimalScale
          decimalSeparator=","
          prefix="€"
        />*/}
        </span>
      );
    }
  };

  let transactions;

  if (zetje) {
    transactions = getCompletedTransactions(zetje).map(transaction => (
      <div key={transaction.lastModifiedDate}>
        {transaction.customerName}
        
        {getTransactionAmount(transaction.customerDonationAmount)}
      </div>
    ));
  } else {
    //console.log("no zetje");
  }

  return (
    <div className="details-wrapper">
      {transactions}
      <div className="details">
        <Share
          totalAmount={totalAmount}
          donationAmount={donationAmount}
          description={description}
          zetje={zetje}
        />
        <Button
          type="secondary"
          onClick={() => deleteThisZetje(zetje.id)}
          className="button share-option copy"
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </Button>
      </div>
    </div>
  );
};

export default ZetjeDetails;
