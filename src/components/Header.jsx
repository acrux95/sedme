import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';

const Header = () => (
  <header className='header' class='header'>
        <link to='/'>
          SEDME
        </link>
        <div class="container-avatar">
            <div class="avatar">
                <img src="../static/user-icon.png" alt="Usuario" class="usuario-avatar" />
            </div>
        </div>
    </header>
);

export default Header;
