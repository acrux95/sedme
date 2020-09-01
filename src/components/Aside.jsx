import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Aside.scss';

const Aside = () => (
  <header className='header'>
    <Link to='/'>Main</Link>
  </header>
);

export default Aside;
