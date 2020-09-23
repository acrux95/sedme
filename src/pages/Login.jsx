import React, { useState } from 'react';
import swal from 'sweetalert2';
import { Link, useHistory } from 'react-router-dom';
// import axios from 'axios';
import '../assets/styles/components/Login.scss';
import img from '../assets/static/logo-claro-190x190px-web.png';

const Login = (props) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const postUser = () => {

    swal.fire({
      title: `${user.password} ${user.email}`,
      icon: 'success',
      timer: 1500,
      showConfirmButton: false,
    });
    const history = useHistory();
    history.push('/');

    // axios.get(`http://localhost:3000/api/users` )
    //   .then(res => {
    //     const persons = res.data;
    //     this.setState({ persons });
    //   })
  };

  return (
    <>
      <div className='loginScreen'>
        <header className='navBar'>
          <p className='title'>SEDME </p>
        </header>
        <img className='mainLogo' src={img} alt='' />
        <div className='mainContainer'>
          <p className='loginTitle'>Login</p>
          <p className='user'>Email</p>
          <input
            className='userInput'
            name='email'
            type='text'
            onChange={handleInputChange}
          />
          <p className='password' onChange={() => setUser()}>
            Password
          </p>
          <input
            className='passwordInput'
            name='password'
            type='text'
            onChange={handleInputChange}
          />
          {/* <button type='submit' className='enterButton' onClick={()=>postUser}> */}
          {/* Get Started
          </button> */}
          <Link className='enterButton buttonToLink' to='/'>Get Started</Link>

          <Link to='/recover' className='passwordRecover'>
            Recover Password
          </Link>
        </div>
        <footer className='footerBar'>
          <p className='title'>Student Goal Setting System for Platzi Master</p>
        </footer>
      </div>
    </>
  );
};

export default Login;
