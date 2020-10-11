import React, { useState } from 'react';

import WeeksView from './WeeksView';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWindowClose,
  faPlus,
  faPencilAlt,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

import '../../assets/styles/components/EditLP.scss';

function EditLP({ close }) {
  function addUser() {
    console.log('buttonClicked');
  }
  return (
    <article className='editLP'>
      <header className='editLP__header'>
        <h1>Editar Learning Path</h1>
        <button className='btn right close-btn' onClick={close}>
          <FontAwesomeIcon icon={faWindowClose} />
        </button>
      </header>
      <WeeksView />
    </article>
  );
}

export default EditLP;
