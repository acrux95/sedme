import React, { useState, useContext, useCallback } from 'react';
import swal from 'sweetalert2';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { GlobalContext } from '../reducers';
import '../assets/styles/components/Login.scss';
import img from '../assets/static/logo-claro-190x190px-web.png';

const Login = (props) => {
  const [{ loggedUser, user }, dispatch] = useContext(GlobalContext);

  const history = useHistory();

  const LOGIN_REQUEST = useCallback(
    (data) => {
      dispatch({ type: 'LOGIN_REQUEST', payload: data });
    },
    [dispatch]
  );

  const [form, setValues] = useState({
    username: '',
  });

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
    // axios
    //   .post('http://3.128.32.140:3000/api/auth/sigin', {
    //     Username: 'Fabian@sedme.com',
    //     Password: '12345678',
    //   })
    axios
      .post(
        'http://3.128.32.140:3000/api/auth/sigin',
        {},
        {
          auth: {
            username: loginUsername,
            password: loginPassword,
          },
        }
      )
      .then((res) => {
        if (res.status === 202) {
          console.log(res);
          const currentUser = {
            username: res.data.userName,
            id: res.data.userId,
            jwt: res.data.access_token,
          };
          Promise.resolve(LOGIN_REQUEST(currentUser)).then(() =>
            history.replace('/home')
          );
          console.log(currentUser);
          // setTimeout(, 10000);
        }
      })
      .then(() => {
        // history.replace('/home');
        console.log(user);
      });
  };
  if (Object.keys(user) > 1) {
  }

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

  const handleInput = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
