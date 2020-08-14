import React, { useState } from 'react';
import Logo from '../components/Logo';
import RegisterFormStep1 from '../components/RegisterFormStep1';
import RegisterFormStep2 from '../components/RegisterFormStep2';
import RegisterFormStep3 from '../components/RegisterFormStep3';
import Menu from '../components/ZetjeMenu';

const RegisterForm = (props) => {
  const {
    setComponent,
    verifyIBAN,
    match,
    setLoggedIn,
  } = props;

  let verificationUrl = '';
  if (verifyIBAN && match) {
    verificationUrl = match.params;
  }

  // Forward user to 0.01 payment page if account exists but IBAN noot yet verified
  const [step, setStep] = useState(verifyIBAN ? 3 : 1);

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    confirmationToken: '',
    confirmationCode: '',
    verificationUrl: verifyIBAN ? decodeURIComponent(verificationUrl) : '',
    allowedToContact: 0,
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <div className="app">
      <Menu />
      <div className="container">
        <Logo />

        <RegisterFormStep1
          form={form}
          setForm={setForm}
          handleChange={handleChange}
          step={step}
          setStep={setStep}
          setComponent={setComponent}
        />

        <RegisterFormStep2
          step={step}
          setStep={setStep}
          form={form}
          setForm={setForm}
        />

        <RegisterFormStep3
          step={step}
          form={form}
        />
      </div>
    </div>
  );
};

export default RegisterForm;
