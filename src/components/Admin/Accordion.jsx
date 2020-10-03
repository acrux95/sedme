import React, { useState } from 'react'
import '../../assets/styles/components/Accordion.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from '../Modal'
import {
  faPencilAlt,
  faUserPlus,
  faChevronRight,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons'

const Accordion = (props) => {
  const [show, setShow] = useState(false)
  const [modal, setModal] = useState(false)

  const changeShow = () => {
    setShow(!show)
  }

  const toggleModal = () => {
    setModal(!modal)
  }

  const addUserToGroup = () => {
    console.log('Here')
  }

  return (
    <>
      <div className='row__content'>
        <div className='row'>
          <span className='row__name' onClick={changeShow}>
            {props.name}
          </span>
          <span className='right'>
            <FontAwesomeIcon
              className='row__icon'
              icon={faUserPlus}
              onClick={toggleModal}
            />
            <FontAwesomeIcon className='row__icon' icon={faPencilAlt} />
            <FontAwesomeIcon
              className='row__icon'
              icon={show ? faChevronDown : faChevronRight}
            />
          </span>
        </div>
        {show ? <div>{props.children}</div> : <></>}
      </div>

      {modal ? (
        <Modal visible={modal}>
          <div className='modal-content'>
            <span className='close' onClick={toggleModal}>
              &times;
            </span>
            <h2>Add user to group</h2>
            <span className='label'>Name</span>
            <input
              className='input'
              type='text'
              name='name'
              onChange={handleInputChange}
            />
            <br />
            <br></br>
            <button className='btn' onClick={addUserToGroup}>
              Guardar
            </button>
          </div>
        </Modal>
      ) : (
        <></>
      )}
    </>
  )
}
export default Accordion
