import React, { useState } from 'react';
import { ReactComponent as CloseMenu } from '../assets/x.svg';
import { ReactComponent as MenuIcon } from '../assets/menu.svg';
import { ReactComponent as Logo } from '../assets/logo.svg';
import './header.css';

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <div className="mobile-menu" onClick={handleClick}>
            {click ? (
              <CloseMenu className="menu-icon" />
            ) : (
              <MenuIcon className="menu-icon" />
            )}
          </div>
          <img
            className="logo-voiture"
            src="/images/picto-voiture-removebg.png"
            alt="logo voiture"
          />
          <img
            className="logo-marguerite"
            src="/images/Logo_Marguerite-removebg.png"
            alt="Logo marguerite"
          />
          <ul className={click ? 'nav-options active' : 'nav-options'}>
            <li className="option">
              <a href="/">Home</a>
            </li>
            <li className="option">
              <a href="/">Mode demploi</a>
            </li>
            <li className="option">
              <a href="/">Réservation marguerite</a>
            </li>
            <li className="option mobile-option">
              <a href="/">Contact</a>
            </li>
          </ul>
          <img className="devise" src="/images/devise.jpg" alt="devise" />
        </div>
      </div>
      <a href="/">
        <Logo className="logo" />
      </a>
    </div>
  );
};

export default Header;
