import React, { useState } from 'react';
import { Checkbox } from 'antd';
import tagManager from '../lib/googleTagManager';
import signup from '../api/signup';

const RegisterFormStep1 = (props) => {
  const [errorPhone, setErrorPhone] = useState(false);
  const [errorAPI, setErrorAPI] = useState(false);
  const [loading, setLoading] = useState(false);
  //const [existing, setExisting] = useState(false);

  const {
    form,
    setForm,
    handleChange,
    step,
    setStep,
    setComponent,
    existingUser,
  } = props;

  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    allowedToContact,
  } = form;

  if (step !== 1) {
    return null;
  }

  const success = (data) => {
    setForm({ ...form, confirmationToken: data.token });
    tagManager({ event: 'pageView', pageName: 'registerStep2' });
    setStep(2);
    //setLoading(false);
    existingUser(data.existingUser);
  };

  const failure = (e) => {
    tagManager({ event: 'serverError', field: 'signup' });
    setErrorAPI(true);
    setLoading(false);
  };

  const validatePhoneNumber = () => {
    const phoneNumberWithoutWhiteSpace = phoneNumber.replace(/\s+/g, '');

    const regexPhoneNumber = /06[0-9]{8}/;

    if (phoneNumberWithoutWhiteSpace.match(regexPhoneNumber)) {
      setErrorPhone(false);
      return true;
    }

    setErrorPhone(true);
    tagManager({ event: 'error', field: 'phone' });
    return false;
  };

  const registerUser = () => {
    setLoading(true);
    signup(phoneNumber, success, failure);
  };

  const handleSubmit = (event) => {
    setErrorAPI(false);

    if (validatePhoneNumber()) {
      registerUser();
    }
    event.preventDefault();
  };

  // Disable submit button while waiting for server
  const submitAttributes = {};

  if (loading) {
    submitAttributes.disabled = 'disabled';
  }

  return (
    <div className="register-form-1">
      <form onSubmit={handleSubmit} className="form">
        <input
          autoFocus
          placeholder="Voornaam"
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleChange}
          className="input"
          required
        />

        <input
          placeholder="Achternaam"
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleChange}
          className="input"
          required
        />

        <input
          placeholder="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          className="input"
          required
        />

        <input
          placeholder="Telefoonnummer"
          type="tel"
          name="phoneNumber"
          value={phoneNumber}
          onChange={handleChange}
          className="input"
          required
        />

        <p style={{ display: errorPhone ? 'block' : 'none' }}>
          Vul een mobiel nummer dat begint met 06
        </p>

        <Checkbox
          name="allowedToContact"
          value={allowedToContact}
          onChange={e => setForm({ ...form, allowedToContact: e.target.checked })}
        >
        Ja, je mag me om feedback vragen over Zetje (via WhatsApp of email)
        </Checkbox>

        <input
          type="submit"
          value="Verder"
          className="submit input"
          {...submitAttributes}
        />
      </form>

      <p style={{ display: errorAPI ? 'block' : 'none' }}>
        Oh oh, er is iets misgegaan op de server. Probeer het later opnieuw of neem contact op via hello@zetje.org.
      </p>

      <div className="back-button">
        <div className="button secondary" onClick={() => setComponent('landing')}>
          Terug
        </div>
      </div>
    </div>
  );
};

export default RegisterFormStep1;
