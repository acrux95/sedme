import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';

const Header = () => (
  <header className='header'>
    <Link to='/'>
      Main
    </Link>
  </header>
);

export default Header;
