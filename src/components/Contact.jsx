/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import tagManager from '../lib/googleTagManager';
import Logo from './Logo';
import Menu from '../components/ZetjeMenu';

const Contact = () => {

  return (
    <div className="app">
      <Menu />
      <div className="container">
        <div className="page">
          <Logo />
          <h1>Contact</h1>
          <h3>Zetje is een initiatief van <a href="https://littlebitz.org">LittleBitz</a>, <br />de nieuwe manier van geven</h3>
          <p>Wil je meedenken over Zetje.org of toekomstige tools? Of heb je een vraag of gewoon iets leuks te melden?<br /><br />Neem dan gerust contact met ons op:</p>
          <p>
            <p>
              <a href="https://wa.me/31629457934" className="whatsapp-link">
                <img src="img/wa_icon.png" width="60" alt="" />
                Contact ons
              </a>
            </p>
            <p>
              Of stuur ons een 
              <a href="mailto:hello@zetje.org" className="footer-link"> mail</a> {/* of 
              <a href="https://www.instagram.com/geefeenzetje/" target="_blank" rel="noopener noreferrer" className="footer-link"> instagram</a><br />
              */}
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
