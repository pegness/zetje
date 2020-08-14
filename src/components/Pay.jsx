/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import { useForm, useStep } from "react-hooks-helper";
import { Button, Spin, Checkbox } from 'antd';
import tagManager from '../lib/googleTagManager';
import Logo from './Logo';
import BankDropdown from './BankDropdown';
import getZetjePaymentLink from '../api/getZetjePaymentLink';
import getZetje from '../api/getZetje';
import PayDonate from './PayDonate';
import PayBank from './PayBank';
//import Slider from './DonationSlider';
//import Profile from './ProfileGenerator';

const steps = [
  { stepId: 'extraDonation' },
  { stepId: 'bankPayment' },
];

const defaultData = {
  extraDonationAmount: 0,
};

const Pay = (props) => {
  const {
    id,
    code,
  } = props.match.params;

  //const defaultBankValue = 'Select an option';

  //const [bank, setBank] = useState(defaultBankValue);
  //const [errorBank, setErrorBank] = useState(false);
  const [errorServer, setErrorServer] = useState(false);
  //const [loadingPayLink, setLoadingPayLink] = useState(false);
  const [loadingZetje, setLoadingZetje] = useState(false);
  const [zetje, setZetje] = useState(true);
  const [extraDonation, setExtraDonation] = useState(0);
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { stepId } = step;


  const {
    totalAmount,
    donationAmount,
    description,
    firstName,
  } = zetje;

  props = {
    formData, setForm, navigation, id, code, extraDonation, setExtraDonation,
  };

  useEffect(() => {
    tagManager({ event: 'pageView', pageName: 'pay' });
    getZetje(id, code, success, failurePayLink);
  },
  []);

  const success = (response) => {
    setZetje(response);
    setLoadingZetje(false);
  };

  const failurePayLink = (e) => {
    console.log(e);
    tagManager({ event: 'serverError', field: 'pay' });
    setErrorServer(true);
    //setLoadingPayLink(false);
  };

  const createEuroAmount = (amount) => {
    let finalAmount = 0;
    finalAmount = amount / 100;
    finalAmount = finalAmount.toFixed(2);
    return finalAmount.toString().replace('.', ',');
  };

  switch (stepId) {
    case 'extraDonation':
      return (
        <div className="app">
          <div className="container">
            <div className="pay">
              <div style={{ display: errorServer ? 'none' : 'block' }}>
                <Logo />
                <PayDonate {...props} />
              </div>
            </div>
          </div>
        </div>
      );
    case 'bankPayment':
      return (
        <div className="app">
          <div className="container">
            <div className="pay">
              <div style={{ display: errorServer ? 'none' : 'block' }}>
                <Logo />
                <PayBank {...props} />
              </div>
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
};


export default Pay;
