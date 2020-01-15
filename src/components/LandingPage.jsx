import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import tagManager from '../lib/googleTagManager';

const LandingPage = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { setComponent, testing } = props;

  useEffect(() => tagManager({ event: 'pageView', pageName: 'landing' }), []);

  function TestingButtons() {
    return (
      <div className="home-buttons">
        <div
          className="button w-button"
          onClick={() => {
            tagManager({ event: 'pageView', pageName: 'register' });
            setComponent('register');
          }}
        >
          Maak account aan
        </div>
        <div
          className="button w-button outline"
          onClick={() => {
            tagManager({ event: 'pageView', pageName: 'login step 1' });
            setComponent('login');
          }}
        >
          Login
        </div>
      </div>
    );
  }

  function WaitingListButton() {
    return (
      <div className="waiting-list-button home-buttons">
        <button
          type="button"
          className="button w-button vrlps-trigger"
        >
          Krijg als eerste toegang
        </button>
      </div>
    );
  }

  return (
    <div className="landing-page">
      <div className="hero">
        <div data-collapse="medium" data-animation="default" data-duration="400" data-doc-height="1" className="nav w-nav">
          <div className="nav-inner">
            <div className="nav-logo-wrap">
              <div className="brand w-nav-brand">
                <img src="img/logo.svg" width="160" alt="" />
                <img src="img/beta_grijs.png" width="60" alt="" style={{ marginLeft: '5px' }} />
                <h5>Betaalverzoekjes die goed doen</h5>
              </div>
              
            </div>
            <div className="nav-menu-wrap">
              <nav role="navigation" className="nav-menu-2 w-nav-menu">
                <a href="#about" className="nav-link w-nav-link">Hoe werkt het</a>
                <a href="#cause" className="nav-link w-nav-link">Wie geef ik</a>
                <a href="#team" className="nav-link w-nav-link">Over Zetje</a>
              </nav>
              <div
                className={menuOpen ? 'menu-button w-nav-button w--open' : 'menu-button w-nav-button'}
                onClick={() => (
                  menuOpen ? setMenuOpen(false) : setMenuOpen(true)
                )}
              >
                <div className="menu-icon w-icon-nav-menu">
                  <FontAwesomeIcon icon={faBars} />
                </div>
              </div>
            </div>
          </div>
          <div className="w-nav-overlay" data-wf-ignore="" style={{ height: '5483px', display: menuOpen ? 'block' : 'none' }}>
            <nav
              role="navigation"
              className="nav-menu-2 w-nav-menu w--nav-menu-open"
              style={{ transform: 'translateY(0px) translateX(0px)', transition: 'transform 400ms ease 0s' }}
            >
              <a href="#about" className="nav-link w-nav-link w--nav-link-open">Hoe werkt het</a>
              <a href="#cause" className="nav-link w-nav-link w--nav-link-open">Wie geef ik</a>
              <a href="#team" className="nav-link w-nav-link w--nav-link-open">Over Zetje</a>
            </nav>
          </div>
        </div>
        
      </div>
      <div className="section center">
        <img src="img/z_mobile_mockup.png" sizes="(max-width: 479px) 80vw, (max-width: 991px) 70vw, 100vw" data-w-id="77e69727-c455-8e07-0990-833a661c94ea" alt="" className="hero-image mobile" />
        <img src="img/arrow.svg" alt="" className="arrow" />
        <div data-w-id="6b220cb1-4b9c-7fb0-75b9-53ff4a6c35a2" className="hero-content">
          <div className="mobile"><TestingButtons /></div>
          {/* 
          {testing ? <TestingButtons /> : <WaitingListButton />}
          <p className="strikethrough-heading">
            <span className="strikethrough">
              Stuur een tikkie
            </span>
          </p> */}
          <h1 className="heading-3 main-heading">
            Geef ze 'n Zetje :)
          </h1>
          <p className="paragraph-2">
          Geef mensen in armoede een toekomst. Doneer een klein beetje geld met elk betaalverzoek.
          </p>

          <div className="desktop"><TestingButtons /></div>
          {/* {testing ? <TestingButtons /> : <WaitingListButton />} */}

        </div>
        <img src="img/z_small.png" sizes="(max-width: 479px) 80vw, (max-width: 991px) 70vw, 100vw" data-w-id="77e69727-c455-8e07-0990-833a661c94ea" alt="" className="hero-image desktop" />
        
      </div>
      <div id="about" className="section wide img">
        <div data-w-id="b126983d-9126-fc06-c81d-1318685e2add" className="wrap">
          <h2 className="align-center">
            Tikkie anders, groot verschil
          </h2>
          <ul>
            <li>De nieuwe norm in betaalverzoekjes</li>
            <li>Rechtstreeks cash doneren aan mensen in nood</li>
            <li>Veilig en betrouwbaar</li>
          </ul>
          <p className="paragraph-2">Met hetzelfde gemak doneer je een klein deel van het geld dat je terugkrijgt aan iemand in nood. Een klein zetje in de rug maakt een groot verschil.</p>
        </div>
        <div className="wrapper" />
      </div>
      <div id="cause" className="section">
        <h2 className="heading-4">
        Rechtstreeks geld geven is de meest effectieve manier om anderen te helpen:
        </h2>
        <div className="feature-wrap icons">
          <div className="feature-content icons">
            <div className="icon">
              <svg className="svg-fill" viewBox="0 0 24 15" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.981 5.29l-1.298 8.438A1.5 1.5 0 0 1 21.201 15H2.799a1.5 1.5 0 0 1-1.482-1.272L.019 5.29a1.503 1.503 0 0 1 1.485-1.732c.287 0 .568.085.808.242L6.5 6.5 11.219.563a1.5 1.5 0 0 1 2.419.105L17.5 6.5l4.188-2.7c.24-.157.52-.241.807-.242a1.503 1.503 0 0 1 1.486 1.732z" />
              </svg>
            </div>
            <h4 className="black-text">
              Vergroot de zelfredzaamheid
            </h4>
            <p className="paragraph-5">
              
            </p>
          </div>
          <div className="feature-content icons">
            <div className="icon">
              <svg className="svg-fill" viewBox="0 0 25 21" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 20.5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5V.5a.5.5 0 1 1 1 0V20h23.5a.5.5 0 0 1 .5.5zM4 17a1 1 0 0 0 1-1 .963.963 0 0 0-.05-.244l4.807-4.805a.786.786 0 0 0 .731-.097l5.513 3.15A1 1 0 0 0 18 14a.961.961 0 0 0-.05-.243l4.806-4.806c.079.027.161.043.244.049a1 1 0 1 0-1-1 .963.963 0 0 0 .05.244l-4.807 4.805a.786.786 0 0 0-.731.097l-5.513-3.15A1 1 0 0 0 9 10a.961.961 0 0 0 .05.243L4.243 15.05A.958.958 0 0 0 4 15a1 1 0 0 0 0 2z" />
              </svg>
            </div>
            <h4 className="black-text">
              Stimuleert de lokale economie
            </h4>
          </div>
          <div className="feature-content icons">
            <div className="icon">
              <svg className="svg-fill" viewBox="0 0 25 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.5 0h-12A1.5 1.5 0 0 0 10 1.5V3H2.5C1.672 3 1 3.672 1 4.5V17H0v.5A2.503 2.503 0 0 0 2.5 20h17a2.503 2.503 0 0 0 2.5-2.5V17h-1v-6h2.5A1.5 1.5 0 0 0 25 9.5v-8A1.5 1.5 0 0 0 23.5 0zM20 17h-7v1H9v-1H2V4.5a.5.5 0 0 1 .5-.5H10v5.5a1.5 1.5 0 0 0 1.5 1.5H20v6zM16.5 5h2a1.5 1.5 0 0 1 0 3H18v.5a.5.5 0 1 1-1 0V8h-1.5a.5.5 0 1 1 0-1h3a.5.5 0 1 0 0-1h-2a1.5 1.5 0 0 1 0-3h.5v-.5a.5.5 0 1 1 1 0V3h1.5a.5.5 0 1 1 0 1h-3a.5.5 0 1 0 0 1z" />
              </svg>
            </div>
            <h4 className="black-text">
              Gemakkelijk, veilig en efficiënt
              <br />
            </h4>
          </div>
        </div>
        <h2 className="heading-4">
          Help mensen in nood
        </h2>
        <p className="paragraph-8">Mensen in grote armoede of vluchtelingen kunnen wel een zetje in de rug gebruiken.<br/>
        Je doneert rechtstreeks aan mensen die zijn geselecteerd door gerenommeerde organisaties als GiveDirectly.
        </p>
        <div className="feature-wrap reverse">
          <div className="feature-image">
            <img src="img/healthconnect.png" width="160" alt="" className="image-2" />
          </div>
          <div className="feature-image">
            <img src="img/unhcr-logo.jpg" width="225" alt="" className="image-2" />
          </div>
          <div className="feature-image">
            <img src="img/give-directly-logo.png" width="225" alt="" className="image-2" />
          </div>
        </div>
      </div>
      <div className="bottom-image-wrap" />
      <div id="team" className="section wide">
        <div data-w-id="8cf47482-19f1-1f52-25ba-910a60bc91de" className="wrap">
          <h2 className="align-center">
            Zetje is een initiatief van LittleBitz, de nieuwe manier van geven.
          </h2>
          <p className="paragraph-4">
            <a href="https://littlebitz.org" style={{ color: 'white' }}>LittleBitz</a>
            {' '} introduceert eenvoudige manieren om direct kleine beetjes geld te doneren aan mensen die het echt nodig hebben. Zoals Zetje.
Hierdoor kunnen mensen lokaal stappen zetten om zelfstandig een beter bestaan op te bouwen.
          </p>
          <p className="paragraph-4">
          Wil je meedenken over Zetje.org of toekomstige tools? Stuur een {' '}
          <a href="https://wa.me/31629457934" style={{ color: 'white' }}>WhatsApp</a>, volg ons op 
            {' '}
            <a
              href="https://www.instagram.com/geefeenzetje/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-4"
            >
              Instagram
            </a>
            {' '}
            of 
            {' '}
            <a href="mailto:hello@zetje.org" className="link-4">mail</a> ons.
          </p>
        </div>
        <div className="wrapper" />
      </div>
      <div className="footer">
        <div className="wrap">
          <a href="https://littlebitz.org">
            <img src="img/littlebitz-logo.svg" width="68" alt="" />
          </a>
          <div className="footer-list">
            <a href="mailto:hello@zetje.org" className="footer-link">Email</a>
            <a href="https://www.instagram.com/geefeenzetje/" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
            <a href="https://wa.me/31629457934" target="_blank" rel="noopener noreferrer" className="footer-link">WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
