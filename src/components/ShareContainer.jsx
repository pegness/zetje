import React from 'react';
import getpayUrl from '../lib/getPayUrl';
import Share from './Share';

const ShareContainer = (props) => {
  const {
    description,
    totalAmount,
    donationAmount,
    zetje,
  } = props;

  const payUrl = getpayUrl(zetje.id, zetje.code);

  return (
    <div className="share-container">
      <h3 className="donation-percentage mt-0">
        Je bent klaar om een Zetje te geven :)
      </h3>

      <form className="form">
        <input
          className="input"
          value={payUrl}
        />
      </form>

      <Share
        description={description}
        totalAmount={totalAmount}
        donationAmount={donationAmount}
        zetje={zetje}
      />
    </div>
  );
};

export default ShareContainer;
