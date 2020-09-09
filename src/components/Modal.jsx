import React from 'react';
import '../assets/styles/components/Modal.scss';

const Modal = (props) => {
  const click = () => {
    modal.style.display = 'block';
  };
  return (
    <>
      <button onClick={click}>Open Modal</button>
      <div id='myModal' className='modal'>
        <div className='modal-content'>
          <span className='close'>&times;</span>
          {props.children}
        </div>
      </div>
    </>
  );
};

export default Modal;
