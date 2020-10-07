import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import profile from '../assets/static/user-icon.png';

const Header = () => (
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

export default Header;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { logoutRequest } from '../actions';
// import '../assets/styles/components/Header.scss';
// import profile from '../assets/static/user-icon.png';

// import gravatar from '../utils/gravatar';

// const Header = props => {
//   const { user, isLogin, isRegister } = props;
//     const hasUser = Object.keys(user).length > 0;
   
//     const handleLogout = () => {
//         props.logoutRequest({})
//     }
//   return ( 
//   <header className='header'>
//     <div className='username'>
//       <a href='#'>{user.email}</a>
//     </div>
//     <div>|</div>
//     <div className="header__menu">
//       <div className="header__menu--profile">
//           {hasUser ?
//           <img src={gravatar(user.email)} alt={user.email} /> :
//           <img src={ profile } alt=""/>
//           }
//           <p>Perfil</p>
//       </div>
//       <ul>

//           {hasUser ?
//               <li><Link to="/">{user.name}</Link></li>
//               : null
//           }
//           {hasUser ?
//               <li><Link to="#logout" onClick={handleLogout}>Cerrar Sesión</Link></li>
//               : <li><Link to="/login">Iniciar sesión</Link></li>
//           }    
//       </ul>
//     </div>
//   </header>
//   )
// };

// const mapStateToProps = state => {
//   return {
//       user: state.user
//   }
// };

// const mapDispatchToProps = {
//   logoutRequest,
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Header);
