import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Aside.scss';

const Aside = () => (
  <aside>
    <ul>
      <li><i></i><a href="#">Home</a></li>
      <li><i></i><a href="#">Learning Path</a></li>
      <li><i></i><a href="#">Activities</a></li>
      <li><i></i><a href="#">Calendar</a></li>
      <li><i></i><a href="#">Goals of the week</a></li>
      <li><i></i><a href="#">Users</a></li>
      <li><i></i><a href="#">Help</a></li>
    </ul>
  </aside>
);

export default Aside;
