import React, { useState } from 'react';
import Logo from '../components/Logo';
import LoginStep1 from '../components/LoginStep1';
import LoginStep2 from '../components/LoginStep2';

const Login = (props) => {
  const [step, setStep] = useState(1);

  const [data, setData] = useState({
    phoneNumber: '',
    confirmationToken: '',
    confirmationCode: '',
  });

  const { setComponent } = props;

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <div className="app">
      <div className="container">
        <Logo />

        <LoginStep1
          data={data}
          setData={setData}
          handleChange={handleChange}
          step={step}
          setStep={setStep}
          setComponent={setComponent}
        />

        <LoginStep2
          step={step}
          setStep={setStep}
          data={data}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Login;
