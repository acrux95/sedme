import React from 'react';
import { Link, useHistory, useCallback, useContext } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import profile from '../assets/static/user-icon.png';

import { GlobalContext } from '../reducers';

function Header(logout) {
  // const [dispatch] = useContext(GlobalContext);

  // // const LOGOUT_REQUEST = useCallback(
  //   (data) => {
  //     dispatch({ type: 'LOGOUT_REQUEST', payload: data });
  //   },
  //   [dispatch]
  // );

  const history = useHistory();

  const logOut = () => {
    localStorage.removeItem('user');
    history.replace('/login');
  };

  return (
    <>
      <header className='header'>
        <div className='username'>
          <a href='/'>Leomaris Reyes</a>
        </div>
        <div>|</div>
        <div className='call-to-action'>
          <button onClick={logOut} className='enterButton'>
            Sign Out
          </button>
        </div>
        <div className='container-avatar'>
          <div className='avatar'>
            <Link className='profileLink' to='/profile'>
              <img src={profile} alt='Usuario' className='usuario-avatar' />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
