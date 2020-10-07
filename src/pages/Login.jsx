import React, { useState, useContext, useCallback } from 'react';
import swal from 'sweetalert2';
import { GlobalContext } from '../reducers';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import '../assets/styles/components/Login.scss';
import img from '../assets/static/logo-claro-190x190px-web.png';

const Login = (props) => {
  const login = (loginUsername, loginPassword) => {
    // axios({
    //   method: 'POST',
    //   data: {
    //     email: loginUsername,
    //     password: loginPassword,
    //   },
    //   withCredentials: true,
    //   url: 'http://3.128.32.140:3000/api/auth/sigin',
    // }).then((res) => console.log(res));
    axios
      .post('http://3.128.32.140:3000/api/auth/sigin', {
        email: 'Fabian@sedme.com',
        password: '12345678',
      })
      .then((res) => console.log(res));
  };
  const [{ loggedUser, user }, dispatch] = useContext(GlobalContext);

  const LOGIN_REQUEST = useCallback(
    (data) => {
      dispatch({ type: 'LOGIN_REQUEST', payload: data });
    },
    [dispatch]
  );

  // const [user, setUser] = useState({
  //   email: '',
  //   password: '',
  // });

  // const handleInputChange = (event) => {
  //   setUser({
  //     ...user,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // LOGIN_REQUEST(form);
    // const history = useHistory();
    // history.replace('/home');
    login(form.email, form.password);
  };

  // const postUser = () => {
  //   swal.fire({
  //     title: `${user.password} ${user.email}`,
  //     icon: 'success',
  //     timer: 1500,
  //     showConfirmButton: false,
  //   });
  //   const history = useHistory();
  //   history.push('/');

  // axios.get(`http://localhost:3000/api/users` )
  //   .then(res => {
  //     const persons = res.data;
  //     this.setState({ persons });
  //   })
  // };

  return (
    <>
      <div className='loginScreen'>
        <header className='navBar'>
          <p className='title'>SEDME </p>
        </header>
        <img className='mainLogo' src={img} alt='' />
        <div className='mainContainer'>
          <form onSubmit={handleSubmit}>
            <p className='loginTitle'>Login</p>
            <div className='userWraper'>
              <p className='user'>Email</p>
              <input
                className='userInput'
                name='email'
                type='text'
                placeholder='Email'
                onChange={handleInput}
              />
            </div>
            <div className='passwordWraper'>
              <p className='password' onChange={() => setUser()}>
                Password
              </p>
              <input
                className='passwordInput'
                name='password'
                type='password'
                onChange={handleInput}
                placeholder='Password'
              />
            </div>
            <button type='submit' className='enterButton'>
              Get Started
            </button>
            {/* <Link className='enterButton buttonToLink' to='/'>
              Get Started
            </Link> */}
          </form>

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
