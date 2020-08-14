import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import tagManager from '../lib/googleTagManager';
import Logo from './Logo';
import GifGenerator from './GifGenerator';


const PaymentSuccess = () => {
  useEffect(() => tagManager({ event: 'pageView', pageName: 'success' }), []);

  return (
    <div className="app">
      <div className="container">
        <div className="pay">
          <Logo />
          <GifGenerator />
          <p>
          Fantastisch! Dat ging makkelijk toch? <br/>
          En zo geef je gelijk mensen in armoede een toekomst.
          </p>
          <p>Tikkie anders, groot verschil. Benieuwd waarom het met Zetje zo makkelijk is om goed te doen?</p>

          <Link to="/" className="button primary">
            Lees het hier
          </Link>
          <div className="center">
            <p><a href="/registreren">Ik wil nu een account aanmaken</a></p>
          </div>
          {/*<h3>
              Bedankt, het Zetje is gegeven!
          </h3>
          <GifGenerator />
          <p>
          Zetje maakt goed doen makkelijk en effectief. Een deel van elk betaalverzoek gaat rechtstreeks naar iemand in nood.
          </p>
          <p>Doe een tikkie anders.</p>

          <Link to="/" className="button primary">
            Stuur ook een Zetje
          </Link>
          */}
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
