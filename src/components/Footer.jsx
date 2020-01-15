import React from 'react';
import { Link } from 'react-router-dom';


const Footer = (props) => {
  const {
    logout,
  } = props;

  return (
    <div className="footer">
      <div className="footer-list">
        {/* <a href="mailto:pieter@littlebitz.org" className="footer-link">Email</a>
        <a href="https://www.instagram.com/geefeenzetje/" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
        <a href="https://www.facebook.com/StichtingLittleBitz" target="_blank" rel="noopener noreferrer" className="footer-link">Facebook</a> 
        <Link to="/" className="">
          Over ons
        </Link>
        <Link to="/" className="">
          Privacy policy
        </Link>
        <a href="https://wa.me/31629457934">Contact
          <img src="img/wa_icon.png" width="40" alt="" />
        </a>*/}
        <Link to="/" className="logout">
          <span onClick={logout}>Uitloggen</span>
        </Link>
      </div>
    </div>

  );
};

export default Footer;
