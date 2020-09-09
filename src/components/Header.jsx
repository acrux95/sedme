import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';

const Header = () => (
  <header className='header'>
    <div className="username"><a href="#">Leomaris Reyes</a></div>
    <div>|</div>
    <div className="call-to-action"><a href="#">Sign Out</a></div>
    <div className="container-avatar">
      <div className="avatar">
        <img src="../static/user-icon.png" alt="Usuario" className="usuario-avatar" />
      </div>
    </div>
  </header>
);

export default Header;
