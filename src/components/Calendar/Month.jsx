import React from 'react'
import '../../assets/styles/components/Calendar/Month.scss'

import Modal from '../Modal'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRight,
  faArrowLeft,
  faSearch,
} from '@fortawesome/free-solid-svg-icons'
import Day from './Day'

export default function Month({ data }) {
  return (
    <>
      <div className='month'>
        <div className='month__week'>
          <div className='month__header'>Sunday</div>
          <div className='month__header'>Monday</div>
          <div className='month__header'>Tuesday</div>
          <div className='month__header'>Wednesday</div>
          <div className='month__header'>Thusday</div>
          <div className='month__header'>Friday</div>
          <div className='month__header'>Saturday</div>
        </div>

        <div className='week'>
          {data.w1
            ? data.w1.map((dayData) => <Day key={dayData.day} data={dayData} />)
            : ''}
        </div>
        <div className='week'>
          {data.w1
            ? data.w2.map((dayData) => <Day key={dayData.day} data={dayData} />)
            : ''}
        </div>
        <div className='week'>
          {data.w1
            ? data.w3.map((dayData) => <Day key={dayData.day} data={dayData} />)
            : ''}
        </div>
        <div className='week'>
          {data.w1
            ? data.w4.map((dayData) => <Day key={dayData.day} data={dayData} />)
            : ''}
        </div>
        <div className='week'>
          {data.w1
            ? data.w5.map((dayData) => <Day key={dayData.day} data={dayData} />)
            : ''}
        </div>
        <div className='week'>
          {data.w1
            ? data.w6.map((dayData) => <Day key={dayData.day} data={dayData} />)
            : ''}
        </div>
      </div>

    </>
  )
}
