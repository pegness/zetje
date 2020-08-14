/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TagManager from 'react-gtm-module';

import './scss/app.scss';
import Pay from './components/Pay';
import AboutUs from './components/AboutUs';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import PaymentSuccess from './components/PaymentSuccess';
import Verification from './containers/Verification';
import RegisterForm from './containers/RegisterForm';

const tagManagerArgs = {
  gtmId: 'GTM-WC4SPVX',
  dataLayerName: 'AppDataLayer',
};

TagManager.initialize(tagManagerArgs);

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about-us" component={AboutUs} />
        <Route
          path="/privacy"
          component={Privacy
          }
        />
        <Route path="/terms" component={Terms} />
        <Route path="/registreren" component={RegisterForm} />
        <Route path="/faq" component={FAQ} />
        <Route path="/contact" component={Contact} render={props => <Verification {...props} testing />} />
        <Route path="/pay/success" component={PaymentSuccess} />
        <Route path="/pay/:id/:code" component={Pay} />
        <Route path="/beta" render={props => <Verification {...props} testing />} />
        <Route path="/testing" render={props => <Verification {...props} testing />} />
        <Route path="/verify/:verificationUrl" render={props => <RegisterForm {...props} verifyIBAN />} />
        <Route render={props => <Verification {...props} testing />} />
      </Switch>
    </Router>
  );
}

export default App;
