import React, { useState } from 'react';
import LandingPage from '../components/LandingPage';
import Login from './Login';
import Register from './RegisterForm';


const LoggedOut = (props) => {
  const [component, setComponent] = useState('');

  const { testing } = props;

  switch (component) {
    case 'login':
      return (
        <Login
          setComponent={setComponent}
        />
      );
    case 'register':
      return (
        <Register
          setComponent={setComponent}
        />
      );
    default:
      return (
        <LandingPage
          setComponent={setComponent}
          testing={testing}
        />
      );
  }
};

export default LoggedOut;
