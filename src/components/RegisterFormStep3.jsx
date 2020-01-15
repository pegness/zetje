import React, { useState } from 'react';
import tagManager from '../lib/googleTagManager';
import BankDropdown from './BankDropdown';
import { existsTypeAnnotation } from '@babel/types';


const RegisterFormStep3 = (props) => {
  const [error, setError] = useState(false);
  const [bank, setBank] = useState(false);

  const {
    step,
    form,
  } = props;

  if (step !== 3) {
    return null;
  }
  const baseUrl = localStorage.getItem('verifyUrl');
  const url = `${baseUrl}?payment_method=ideal&issuer=${bank.bic}`;

  const handleSubmit = () => {
    if (bank) {
      setError(false);
      window.open(url, '_self');
    } else {
      setError(true);
      tagManager({ event: 'error', field: 'iban verification' });
    }
  };

  return (
    <div className="register-form-3">
      <h3>
      Bevestig de rekening waarop je je geld wilt ontvangen met een betaling van € 0,01.
      </h3>

      <BankDropdown
        bank={bank}
        setBank={setBank}
      />

      <div
        className="button primary"
        onClick={handleSubmit}
      >
        Betaal met iDEAL
      </div>
      <p
        className="error-message"
        style={{ display: error ? 'block' : 'none' }}
      >
        Kies de rekening waarop je je geld wilt ontvangen.
      </p>
    </div>
  );
};

export default RegisterFormStep3;
