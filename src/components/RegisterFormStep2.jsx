import React, { useState } from 'react';
import { Button } from 'antd';
import tagManager from '../lib/googleTagManager';
import confirm from '../api/confirm';


const RegisterFormStep2 = (props) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const {
    step,
    setStep,
    form,
    setForm,
    existingUser,
    //setExisting,
  } = props;

  if (step !== 2) {
    return null;
  }

  if (loading) {
    setTimeout(() => {
      setLoading(false);
    },
    10000);
  }

  const success = (response) => {
    const {
      verificationUrl,
      token,
    } = response;

    localStorage.setItem('token', token);

    setForm({
      ...form,
      verificationUrl,
      confirmationToken: token,
    });

    if (verificationUrl) {
      tagManager({ event: 'pageView', pageName: 'registerStep3' });
      setStep(3);
      setLoading(false);
    } else if (existingUser) {
      setError('Er is al een account met dit nummer, je wordt nu automatisch ingelogd..');
    } else {
      setError('Er is al een account met dit nummer, je wordt nu automatisch ingelogd..');
      setTimeout(() => {
        tagManager({ event: 'pageView', pageName: 'dashboard' });
        window.location.reload();
      },
      2000);
    }
  };

  const failure = (e) => {
    tagManager({ event: 'serverError', field: 'confirm' });
    setError('Oh oh.. Verificatiecode komt niet overeen');
    setLoading(false);
  };

  const handleSubmit = () => {
    setLoading(true);
    confirm(form, success, failure);
  };

  return (
    <div className="register-form-2">
      <input
        autoFocus
        placeholder="Verificatiecode"
        name="confirmationCode"
        className="input"
        loading={loading}
        onChange={e => setForm({ ...form, confirmationCode: e.target.value })}
      />
      <p> </p>
      <p style={{ display: error ? 'block' : 'none' }}>
        {error}
      </p>

      <p style={{ display: loading ? 'block' : 'none' }}>
        <span>SMS is verzonden naar </span>
        { form.phoneNumber}
        <br />
        Even geduld....
      </p>

      <Button
        type="primary"
        size="large"
        onClick={handleSubmit}
        //loading={loading}
        className="button primary stacked"
      >
        Verder
      </Button>
      <p> </p>
      <p>
        <b>Geen SMS ontvangen?</b>
        <br />
        <span>Als je na 30 seconden geen SMS hebt ontvangen, ga dan terug en controleer je telefoonnummer. Klopt alles? Neem dan contact met ons op via WhatsApp.</span>
      </p>

      <Button
        type="secondary"
        size="small"
        onClick={() => setStep(1)}
        loading={loading}
        className="button secondary"
      >
        Terug
      </Button>
    </div>
  );
};

export default RegisterFormStep2;
