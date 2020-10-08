// Dependencies
import React from 'react';

// Components
import Header from './Header';
import Aside from './Aside';
import Footer from './Footer';
//Assets
import '../assets/styles/components/Layout.scss';

const Layout = (props) => {
  return (
    <div className='page'>
      <Aside />
      <Header />
      <section className='content'>{props.children}</section>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
