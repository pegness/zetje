/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';
import tagManager from '../lib/googleTagManager';
import Logo from './Logo';
import Menu from './ZetjeMenu';

const Terms = () => {

  return (
    <div className="app">
      <Menu />
      <div className="container">

        <div className="page">
          <Logo />
          <h1>Veelgestelde vragen</h1>
          <p>Snel antwoord? Kijk hier voor de veelgestelde vragen of stuur een <a href="https://wa.me/31629457934">WhatsApp</a>.</p>
          <div className="selected-wrapper">
            <h3>Zetje algemeen</h3>
            <Accordion atomic={true}>
              <AccordionItem title="Wat is Zetje?">
              Zetje is jouw vertrouwde betaalverzoek met een twist: Bij elk betaalverzoek kan degene die geld terugvraagt een percentage van het bedrag doneren aan iemand in nood. 
Jij betaalt alleen het bedrag dat staat aangegeven, simpel met iDEAL.
              </AccordionItem>
              <AccordionItem title="Met welke bank kan ik Zetje gebruiken?">
              Zetje is met elke Nederlandse bank te gebruiken. Zowel voor het registreren en voor het betalen van Zetjes is iDEAL nodig.
              </AccordionItem>
              <AccordionItem title="Is Zetje veilig?">
              Ja. Net zo veilig als elk ander betaalverzoek. De betalingen worden verwerkt door Online Betaal Platform van MediaMedics BV, bekend van Marktplaats, ANWB en andere gerespecteerde bedrijven.
Alle Zetje betaalverzoeken beginnen met https://zetje.org/pay/. Zie je iets anders, laat het ons weten via WhatsApp of hello@zetje.org. 
              </AccordionItem>
              <AccordionItem title="Waar gaat de donatie heen?">
              De donatie gaat naar iemand in nood in Kenia. Onze partner GiveDirectly selecteert de mensen die onze hulp het best kunnen gebruiken. De donateur, ofwel degene die het Zetje heeft gestuurd, kan zien wie de donatie precies heeft ontvangen.
              </AccordionItem>
              <AccordionItem title="Is Zetje gratis te gebruiken?">
              Nee, 100% van jouw donatie gaat naar GiveDirectly, dat er op haar beurt voor zorgt dat het geld bij de ontvangers komt. Benieuwd waarom GiveDirectly als een van de beste goede doelen bekend staat? Kijk hier: https://www.thelifeyoucansave.org/best-charities/givedirectly/.
              </AccordionItem>
              <AccordionItem title="Blijft er geld aan de strijkstok hangen?">
              Ja. Net zo veilig als elk ander betaalverzoek. De betalingen worden verwerkt door Online Betaal Platform van MediaMedics BV, bekend van Marktplaats, ANWB en andere gerespecteerde bedrijven.
Alle Zetje betaalverzoeken beginnen met https://zetje.org/pay/. Zie je iets anders, laat het ons weten via WhatsApp of hello@zetje.org. 
              </AccordionItem>
              <AccordionItem title="Wie zit er achter Zetje?">
              Zetje is een initiatief van LittleBitz, de nieuwe manier van geven. LittleBitz is een not for profit platform met ANBI status, geregistreerd in Amsterdam. LittleBitz maakt geven leuker en effectiever. Lees meer over LittleBitz op littlebitz.org of stuur ons een WhatsApp.
              </AccordionItem>
            </Accordion>
          </div>
          <div className="selected-wrapper">
            <h3>Zetjes versturen</h3>
            <Accordion atomic={true}>
              <AccordionItem title="Hoe maak ik een Zetje?">
              Log in of registreer via zetje.org. Kies dan voor de ronde + knop rechts onderin en volg de stappen. Je kan zelf je donatiepercentage instellen tussen 1 en 100%. 
              </AccordionItem>
              <AccordionItem title="Wanneer heb ik het geld op mijn rekening?">
              Eén werkdag nadat iemand je betaald heeft staat het geld op je rekening. Ben je net nieuw bij Zetje, dan kan het een dag langer duren. Heb je het geld na 2 werkdagen nog niet ontvangen, neem dan contact met ons op.
              </AccordionItem>
              <AccordionItem title="Hoe langt duurt het voordat mijn donatie bij de persoon die ik steun is?">
              Maximaal 1 maand. Jouw donatie wordt gebundeld met andere donaties verstuurd aan de aan jou toegewezen persoon. Dat gebeurt 1 keer per maand, zodat de ontvanger elke maand op dezelfde dag een bijdrage ontvangt. Door met regelmaat hetzelfde bedrag te sturen kunnen mensen beter plannen, sparen en investeren. 
              </AccordionItem>
              <AccordionItem title="Hoe verander ik mijn IBAN?">
              Neem contact met ons op via <a href="https://wa.me/31629457934">WhatsApp</a> of <a href="mailto:hello@zetje.org">hello@zetje.org</a>.
              </AccordionItem>
              <AccordionItem title="Hoe verander ik mijn telefoonnummer?">
              Neem contact met ons op via <a href="https://wa.me/31629457934">WhatsApp</a> of <a href="mailto:hello@zetje.org">hello@zetje.org</a>
              </AccordionItem>
              <AccordionItem title="Hoe pas ik mijn emailadres aan?">
              Neem contact met ons op via <a href="https://wa.me/31629457934">WhatsApp</a> of <a href="mailto:hello@zetje.org">hello@zetje.org</a>
              </AccordionItem>
              <AccordionItem title="Ik heb geen SMS ontvangen">
              Als je bij de registratie na 30 seconden geen SMS hebt ontvangen, kan je 'Terug' klikken en het nogmaals proberen. Kijk ook even of je telefoonnummer klopt.
              </AccordionItem>
              <AccordionItem title="Ik krijg updates via SMS, waarom is dat?">
              We willen je graag laten weten dat je Zetje betaald is. Dat kan het makkelijkst en snelst via SMS. Wil je je afmelden? Stuur een berichtje via <a href="https://wa.me/31629457934">WhatsApp</a> of naar <a href="mailto:hello@zetje.org">hello@zetje.org</a>.
              </AccordionItem>
              <AccordionItem title="Ik kan Zetje niet vinden in de Play of App Store.">
              Dat klopt. Je kan Zetje gebruiken via zetje.org. Wil je Zetje op je startscherm in Android, klik dan hier. Voor iPhone is dit nog niet mogelijk. We werken aan een oplossing.
              </AccordionItem>
            </Accordion>
          </div>
          <div className="selected-wrapper">
            <h3>Zetjes betalen</h3>
            <Accordion atomic={true}>
              <AccordionItem title="Hoe werkt Zetje?">
              Zetje is jouw vertrouwde betaalverzoek met een twist: Bij elk betaalverzoek kan degene die geld terugvraagt een percentage van het bedrag doneren aan iemand in nood. 
Jij betaalt alleen het bedrag dat staat aangegeven, simpel met iDEAL.
              </AccordionItem>
              <AccordionItem title="Ben ik met Zetje meer geld kwijt?">
              Nee, Zetje is gratis om te gebruiken. Degene die jou een Zetje heeft gestuurd bepaalt het totale bedrag van het Zetje en het percentage dat ze daarvan doneert. Jij betaalt alleen het totale bedrag.
              </AccordionItem>
              <AccordionItem title="Wat is het verschil met andere betaalverzoeken?">
              Zetje is het betaalverzoek dat goed doet. Bij elke betaling gaat een klein deel naar mensen in nood. Daarnaast is Zetje net zo makkelijk en veilig als elk ander betaalverzoek. Want wij geloven dat goed doen makkelijk en leuk kan zijn. Jij toch ook?
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
