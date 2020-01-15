import React, { useState } from 'react';
import { Button } from 'antd';
import tagManager from '../lib/googleTagManager';
import confirm from '../api/confirmLogin';

const LoginStep2 = (props) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    data,
    handleChange,
    step,
    setStep,
  } = props;

  if (step !== 2) {
    return null;
  }

  const success = (response) => {
    const {
      token,
    } = response;

    localStorage.setItem('token', token);
    tagManager({ event: 'pageView', pageName: 'dashboard' });
    window.location.reload();
  };

  const failure = (e) => {
    tagManager({ event: 'serverError', field: 'confirm' });
    setError(true);
    setLoading(false);
  };

  const handleSubmit = () => {
    const requestData = {
      ...data,
    };

    setLoading(true);
    confirm(requestData, success, failure);
  };

  return (
    <div className="login">
      <input
        autoFocus
        placeholder="Verificatiecode"
        name="confirmationCode"
        className="input"
        onChange={e => handleChange(e)}
      />

      <p style={{ display: error ? 'block' : 'none' }}>
        Oh oh.. Verificatiecode komt niet overeen
      </p>

      <Button
        type="primary"
        size="large"
        onClick={handleSubmit}
        loading={loading}
        className="button primary stacked"
      >
        Verder
      </Button>

      <div className="back-button">
        <div className="button secondary" onClick={() => setStep(1)}>
          Terug
        </div>
      </div>
    </div>
  );
};

export default LoginStep2;
