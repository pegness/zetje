import React, { useState } from 'react';
import { Button } from 'antd';
import copy from 'copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { whatsAppUrl } from '../lib/const';
import tagManager from '../lib/googleTagManager';
import getpayUrl from '../lib/getPayUrl';

const Share = (props) => {
  const {
    description,
    totalAmount,
    donationAmount,
    zetje,
  } = props;

  const [copied, setCopied] = useState(false);

  const createEuroAmount = (amount) => {
    let finalAmount = 0;
    finalAmount = amount / 100;
    finalAmount = finalAmount.toFixed(2);
    return finalAmount.toString().replace('.', ',');
  };

  const payUrl = getpayUrl(zetje.id, zetje.code);
  const shareMessage = `Hey! Wil je me €${createEuroAmount(totalAmount)} betalen voor '${description}' via Zetje: ${payUrl}. Ik doneer €${createEuroAmount(donationAmount)} daarvan rechtstreeks aan iemand in Kenia :)`;

  const whatsApp = () => {
    tagManager({ event: 'share', channel: 'whatsapp' });

    const shareMessageEncoded = encodeURIComponent(shareMessage);

    window.location.href = whatsAppUrl + shareMessageEncoded;
  };

  const copyLink = () => {
    copy(shareMessage);

    setCopied(true);

    setTimeout(
      () => setCopied(false),
      3000,
    );

    tagManager({ event: 'share', channel: 'copy' });
  };

  return (
    <div className="share">
      {/*<h3 className="mt-0">
        Deel via..
      </h3>*/}

      <Button
        type="primary"
        size="large"
        onClick={whatsApp}
        className="button share-option whatsapp"
      >
        <FontAwesomeIcon icon={faWhatsapp}  />
      </Button>

      <Button
        type="primary"
        size="large"
        onClick={copyLink}
        className="button share-option copy"
      >
        <FontAwesomeIcon icon={faCopy} />
      </Button>

      <div className="copy-success" style={{ display: copied ? 'block' : 'none' }}>
        Link gekopieerd!
      </div>

    </div>
  );
};

export default Share;
