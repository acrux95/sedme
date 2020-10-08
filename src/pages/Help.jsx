import React from 'react'
import swal from 'sweetalert2'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import logo from '../assets/static/DarkCodeLogo.png'

import '../assets/styles/components/Home.scss'

const Help = (props) => {
  return (
    <>
      <Layout path={props.location.pathname}>
        <h1 className='PageTitle'>Help</h1>
        <p>Here you will find user help</p>
        <h1 className='PageTitle'>About</h1>
        <img src={logo} height="350px" alt='logo' />
      </Layout>
    </>
  )
}

export default Help
