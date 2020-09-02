import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Aside.scss';

const Aside = () => (
  <aside>
    <ul>
      <li><a href="#">Inicio</a></li>
      <li><a href="#">Learning Path</a></li>
      <li><a href="#">Actividades</a></li>
      <li><a href="#">Calendario</a></li>
      <li><a href="#">Metas Semanales</a></li>
      <li><a href="#">Ayuda</a></li>
    </ul>
  </aside>
);

export default Aside;
