import React, { useState } from 'react';
import { Button } from 'antd';
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
  };

  const failure = (e) => {
    tagManager({ event: 'serverError', field: 'deleteZetje' });
    setError(true);
    setLoading(false);
  };

  const token = localStorage.getItem('token');

  const delZetje = (data) => {
    deleteZetje(data, token, success, failure);
  };

  let transactions;

  if (zetje) {
    transactions = getCompletedTransactions(zetje).map(transaction => (
      <div key={transaction.lastModifiedDate}>
        {transaction.customerName}
      </div>
    ));
  } else {
    console.log("no zetje");
  }

  return (
    <div className="details">
      {transactions}
      <Share
        totalAmount={totalAmount}
        donationAmount={donationAmount}
        description={description}
        zetje={zetje}
      />
      
    </div>
  );
};

export default ZetjeDetails;
