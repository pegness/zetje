import React, { useState } from 'react';
import { Spin } from 'antd';
import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';
import getAllZetjes from '../api/getAllZetjes';
import tagManager from '../lib/googleTagManager';
import Logo from '../components/Logo';
import getVerified from '../api/getVerified';

const Verification = (props) => {
  const [error, setError] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [allZetjes, setAllZetjes] = useState(false);

  const { testing, history } = props;

  const token = localStorage.getItem('token');
  const isVerified = localStorage.getItem('verified');

  const failure = (e, field) => {
    //console.log(e);
    tagManager({ event: 'serverError', field });
    setError(true);
  };

  const successAllZetjes = (data) => {
    setAllZetjes(data);
    setLoggedIn(true);
  };

  const successVerified = (data) => {
    const {
      verified,
      url,
      name,
    } = data;

    if (verified) {
      localStorage.setItem('verified', true);
      localStorage.setItem('name', name);
      getAllZetjes(token, successAllZetjes, failure);
    } else {
      setError('Je hebt je IBAN nog niet geverifieerd, je wordt nu doorgestuurd..');
      setTimeout(() => {
        tagManager({ event: 'pageView', pageName: 'registerStep3' });
        localStorage.setItem('verifyUrl', url);
        localStorage.setItem('name', name);
        history.push(`/verify/iban`);
      },
      2000);
    }
  };

  const logout = () => {
    localStorage.setItem('token', '');
    localStorage.setItem('verified', '');
    localStorage.setItem('name', '');
    localStorage.setItem('verifyUrl', '');
    setLoggedIn(false);
  };

  if (!loggedIn && token && !isVerified) {
    getVerified(token, successVerified, failure);

    return (
      <div className="app">
        <div className="container">      
          <div className="loading">
            <Logo />
            <Spin size="large" />
            <h3>
              {error || 'Zetjes worden opgehaald..'}
            </h3>
          </div>
        </div>
      </div>
    );
  }

  if (!loggedIn && token && isVerified) {
    getAllZetjes(token, successAllZetjes, failure);

    return (
      <div className="app">
        <div className="container">
          <div className="loading">
            <Logo />
            <Spin size="large" />
            <h3>
              {error || 'Zetjes worden opgehaald..'}
            </h3>
          </div>
        </div>
      </div>
    );
  }

  if (loggedIn) {
    return (
      <LoggedIn
        setLoggedIn={setLoggedIn}
        allZetjes={allZetjes}
      />
    );
  }

  return (
    <LoggedOut
      testing={testing}
    />
  );
};

export default Verification;
