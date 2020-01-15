/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import tagManager from '../lib/googleTagManager';
import Logo from './Logo';
import Menu from './ZetjeMenu';

const AboutUs = () => {

  return (
    <div className="app">
      <Menu />
      <div className="container">

        <div className="page">
          <Logo />
          <h1>Over Zetje</h1>
          <h3>Zetje is een initiatief van <a href="https://littlebitz.org">LittleBitz</a>, de nieuwe manier van geven</h3>
          <p>
          LittleBitz is een not for profit platform met ANBI status. Wij geloven dat met de huidige technologie goed doen veel beter kan. De twee voornaamste manieren waarop we doneren beter maken zijn: 
          </p>
          <p>
          1. Jij hebt de controle. Met makkelijke tools, zoals Zetje, bepaal je zelf wanneer en hoeveel je geeft. Mensen doneren steeds minder via traditionele goede doelen. Lidmaatschappen en jarenlang aan hetzelfde doel vastzitten zijn niet meer van deze tijd. Jij wil controle en gemak. Met Zetje heb je alles zelf in de hand. En we vallen je niet lastig om je donatie te verhogen. Wel zo fijn, toch?
          </p>
          <p>
          2. Jouw donatie maakt het verschil. Want jouw donatie belandt niet op de grote hoop. Wij werken alleen met bewezen effectieve methodes van hulp. Rechtstreeks geld geven aan mensen in nood is een van de beste manieren om mensen vooruit te helpen. Wij geloven dat mensen zelf het beste weten wat ze nodig hebben. 
En we laten jou weten wie precies jouw geld heeft ontvangen. Wil je meer weten over de impact van rechtstreeks geld? Kijk dan op littlebitz.org.
          </p>
          <p>
          Heb je vragen of wil je meer weten over Zetje? Kijk in de <a href="/faq">FAQ</a> of stuur ons een WhatsApp.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
