import React, { useState } from 'react';
import Donation from '../components/Donation';
import PopupForm from '../components/PopupForm';
import Amount from '../components/Amount';
import BackButton from '../components/BackButton';
import HomeButton from '../components/HomeButton';
import Description from '../components/Description';
import Dashboard from '../components/Dashboard';
import ShareContainer from '../components/ShareContainer';
import Menu from '../components/ZetjeMenu';

function LoggedIn(props) {
  const {
    allZetjes,
  } = props;

  // currentStep decides which component should be rendered
  const [loggedIn, setLoggedIn] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [description, setDescription] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [zetje, setZetje] = useState('');
  const [donationPercentage, setDonationPercentage] = useState(10);

  const logout = () => {
    localStorage.setItem('token', '');
    localStorage.setItem('verified', '');
    setLoggedIn(false);
  };


  const donationAmount = Math.round(totalAmount * donationPercentage) / 100;
  return (
    <div className="app">
      <Menu />
      <div className="container">
        {currentStep === 0 && (
        <Dashboard
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          logout={logout}
          allZetjes={allZetjes}
        />
        )}
        {currentStep === 2 && (
        <Description
          totalAmount={totalAmount}
          donationAmount={donationAmount}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          description={description}
          setDescription={setDescription}
        />
        )}
        {currentStep === 1 && (
        <Amount
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          totalAmount={totalAmount}
          setTotalAmount={setTotalAmount}
        />
        )}
        {currentStep === 3 && (
        <Donation
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          donationPercentage={donationPercentage}
          setDonationPercentage={setDonationPercentage}
          donationAmount={donationAmount}
          totalAmount={totalAmount}
          description={description}
          setZetje={setZetje}
        />
        )}

        {currentStep === 4 && (
        <ShareContainer
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          description={description}
          totalAmount={totalAmount}
          donationAmount={donationAmount}
          zetje={zetje}
        />
        )
        }
        {currentStep !== 4 && (
        <BackButton
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
        )
        }
        {currentStep === 4 && (
          <HomeButton />
        )
        }
        {currentStep === 4 && (
          <PopupForm />
        )
        }
      </div>
    </div>
  );
}

export default LoggedIn;
