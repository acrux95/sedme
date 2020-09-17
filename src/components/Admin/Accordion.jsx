import React from 'react'
import '../../assets/styles/components/Accordion.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPencilAlt,
  faTrashAlt,
  faChevronRight,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons'

const Accordion = (props) => {
  const data = [
    { name: 'Cohort 1' },
    { name: 'Cohort 2' },
    { name: 'Cohort 3' },
  ]
  return (
    <>
      {data.map((d) => (
        <>
          <div className='row'>
            <span className='row__name'>{d.name}</span>
            <span className='right'>
              <FontAwesomeIcon className='row__icon' icon={faPencilAlt} />
              <FontAwesomeIcon className='row__icon' icon={faTrashAlt} />
              <FontAwesomeIcon className='row__icon' icon={faChevronRight} />
            </span>
          </div>
          <div className='row__content'>{props.children}</div>
        </>
      ))}
    </>
  )
}
export default Accordion
