import React from 'react';
import Share from './Share';

const ZetjeDetails = (props) => {
  const { zetje } = props;

  const {
    totalAmount,
    donationAmount,
    description,
  } = zetje;

  return (
    <div className="details">
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
