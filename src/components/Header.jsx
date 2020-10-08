import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import profile from '../assets/static/user-icon.png';

const Header = () => {
  return (
    <header className='header'>
      <div className='username'>
        <a href='#'>Leomaris Reyes</a>
      </div>
      <div>|</div>
      <div className='call-to-action'>
        <Link to='/login'>Sign Out</Link>
      </div>
      <div className='container-avatar'>
        <div className='avatar'>
          <Link className='profileLink' to='/profile'>
            <img src={profile} alt='Usuario' className='usuario-avatar' />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
