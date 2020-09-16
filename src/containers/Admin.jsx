import React from 'react';
import '../assets/styles/components/Admin.scss';
import Modal from '../components/Modal';

import Table from '../components/Admin/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch, faclipboardlist, fahatwizard, facalendaralt, fachartbar, fausers, faquestioncircle } from '@fortawesome/free-solid-svg-icons';

const Admin = () => {
  return (
    <>
      <h1>Administración</h1>
      <div className='tab'>
        <button className='tab__btn active'>Usuarios</button>
        <button className='tab__btn'>Grupos</button>
      </div>
      <div className='tab__content'>
        <input className='search' type='text' />
        <div className='search__icon'>
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <button className='btn right'>
          <FontAwesomeIcon icon={faPlus} />
          Añadir Usuario
        </button>
        <br />
        <Table></Table>
        <Modal>
          <h2>Nuevo usuario</h2>
          <span className='label'>Name</span>
          <input className='input' type='text' />
          <br />
          <span className='label'>Email</span>
          <input className='input' type='text' />
          <br />
          <span className='label'>Phone</span>
          <input className='input' type='text' />
          <br></br>
          <button className='btn'>Guardar</button>
        </Modal>
      </div>
    </>
  );
};
export default Admin;
