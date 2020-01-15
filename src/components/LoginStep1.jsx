import React, { useState } from 'react';
import tagManager from '../lib/googleTagManager';
import signup from '../api/signup';


const LoginStep1 = (props) => {
  const {
    data,
    setData,
    handleChange,
    step,
    setStep,
    setComponent,
  } = props;

  const { phoneNumber } = data;

  const [userNotFound, setUserNotFound] = useState(false);
  const [errorAPI, setErrorAPI] = useState(false);
  const [loading, setLoading] = useState(false);

  if (step !== 1) {
    return null;
  }

  const success = (response) => {
    setLoading(false);
    setErrorAPI(false);
    setUserNotFound(false);

    if (response.existingUser) {
      setData({ ...data, confirmationToken: response.token });
      tagManager({ event: 'pageView', pageName: 'login step 2' });
      setStep(2);
    } else {
      setUserNotFound(true);
    }
  };

  const failure = (e) => {
    console.log(e);
    tagManager({ event: 'serverError', field: 'login' });
    setErrorAPI(true);
    setLoading(false);
  };

  const handleSubmit = (event) => {
    setLoading(true);
    signup(phoneNumber, success, failure);
    event.preventDefault();
  };

  // Disable submit button while waiting for server
  const submitAttributes = {};

  if (loading) {
    submitAttributes.disabled = 'disabled';
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit} className="form">
        Mobiele nummer
        <input
          placeholder="0612345678"
          type="number"
          name="phoneNumber"
          value={phoneNumber}
          onChange={e => handleChange(e)}
          className="input"
          required
        />

        <input
          type="submit"
          value="Stuur code"
          className="submit input"
          {...submitAttributes}
        />
      </form>

      <p
        className="error"
        style={{ display: userNotFound ? 'block' : 'none' }}
      >
        Geen account gevonden met dit nummer
      </p>

      <p
        className="error"
        style={{ display: errorAPI ? 'block' : 'none' }}
      >
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

export default LoginStep1;
