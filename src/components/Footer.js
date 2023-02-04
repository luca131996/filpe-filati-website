import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import logo from "../images/logo.png"

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
            <Link to='/' className='social-logo'>
            <img className='footer-logo' src={logo} alt="Yarn Image"/>
            </Link>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Filpe Filati Cucirini s.n.c.</h2>
            <h10>Produzione di filati cucirini per l'industria tessile, dell'abbigliamento, ricamo e confezione.</h10>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Contatti</h2>
            <h10>Gandino (Bg) - 24024</h10>
            <h10>E-mail: info@filpe.it</h10>
            <h10>Tel: +39 035732078</h10>
            <h10>P.IVA: 02584800169</h10>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
