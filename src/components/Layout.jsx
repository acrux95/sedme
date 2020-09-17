import React from 'react'
import Header from './Header'
import Aside from './Aside'
import Footer from './Footer'

const Layout = (props) => (
  <div className='page'>
    {/* <Aside /> */}
    <Header />
    <section className='content'>{props.children}</section>
    <Footer />
  </div>
)

export default Layout
