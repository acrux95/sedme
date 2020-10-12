import React from 'react'
import '../assets/styles/components/Modal.scss'

const Modal = (props) => {
  return (
    <>
      <div>
        {props.visible ? (
          <div id='myModal' className='modal'>
            {props.children}
          </div>
        ) : (
          <div> </div>
        )}
      </div>
    </>
  )
}

export default Modal
