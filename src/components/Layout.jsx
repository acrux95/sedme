import React from 'react';
import Header from './Header';
import Aside from './Aside';

const Footer = (props) => (
  <div className='page'>
    <Aside></Aside>
    <section className='page__box'>
      <Header></Header>
      <div className='page__content'>{props.children}</div>
    </section>
  </div>
);

export default Footer;
