import React, { useCallback, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import profile from '../assets/static/user-icon.png';
import { GlobalContext } from '../reducers';

function Header({ username }) {
  const [{ loggedUser, user }, dispatch] = useContext(GlobalContext);

  const history = useHistory();

  const logOut = () => {
    localStorage.removeItem('user');
    history.replace('/login');
  };

  return (
    <>
      <header className='mainHeader'>
        <div className='username'>
          <Link to="/profile">{user.username}</Link>
        </div>
        <div>|</div>
        {/* <div className='call-to-action'>
          <button onClick={logOut} className='enterButton'>
            Sign Out
          </button>
        </div> */}
        <div className="header__menu">
                <div className="header__menu--profile">
                  <img src={profile} alt='Usuario' className='usuario-avatar' />
                </div>
              <ul>
                  <li><Link to="/profile">Profile</Link></li>
                  <li><Link to="/login" onClick={logOut}>Log Out</Link></li>  
              </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
