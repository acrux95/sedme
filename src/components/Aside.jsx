import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Aside.scss';

const Aside = () => (
  <aside>
    <link to='/'>
      <h1>SEDME</h1>
    </link>
    <ul>
      <li><a href="#"><i className="fas fa-home"></i><p>Home</p></a></li>
      <li><a href="#"><i className="fas fa-clipboard-list"></i><p>Learning Path</p></a></li>
      <li><a href="#"><i className="fas fa-hat-wizard"></i><p>Activities</p></a></li>
      <li><a href="#"><i className="far fa-calendar-alt"></i><p>Calendar</p></a></li>
      <li><a href="#"><i className="fas fa-chart-bar"></i><p>Goals of the week</p></a></li>
      <li><a href="#"><i className="fas fa-users"></i><p>Users</p></a></li>
      <li><a href="#"><i className="fas fa-question-circle"></i><p>Help   </p></a></li>
    </ul>
  </aside>
);

export default Aside;
