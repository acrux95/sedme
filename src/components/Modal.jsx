import React from 'react'
import '../assets/styles/components/Modal.scss'

const Modal = (props) => {
  console.log(props)
  return (
    <>
      {/* {props.visible ? ( */}
      <div id='myModal' className='modal'>
          {props.children}
      </div>
      {/* ) : ( */}
      {/* <div>Hola</div> */}
      {/* )} */}
    </>
  )
}

export default Modal
