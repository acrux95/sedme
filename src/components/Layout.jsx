// Dependencies
import React from 'react'
// Components
import Header from './Header'
import Aside from './Aside'
import Footer from './Footer'
//Assets
import '../assets/styles/components/Layout.scss'

const Layout = (props) => (
  <div className='page'>
    <Aside path={props.path} />
    <Header />
    <section className='content'>{props.children}</section>
    {/* <Footer /> */}
  </div>
)

export default Layout
