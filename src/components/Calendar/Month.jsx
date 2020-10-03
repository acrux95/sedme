import React from 'react'
import '../../assets/styles/components/Calendar/Month.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRight,
  faArrowLeft,
  faSearch,
} from '@fortawesome/free-solid-svg-icons'
import Day from './Day'

export default function Month() {
  const month = 'September'
  const year = 2020

  const week = [
    {
      day: 30,
      activities: [
        {
          color: 'red',
          hour: '2pm',
          description: 'Reunion de ',
        },
        {
          color: 'red',
          hour: '5pm',
          description: 'Curso de ',
        },
      ],
    },
    {
      day: 31,
      activities: [
        {
          color: 'red',
          hour: '2pm',
          description: 'Reunion ',
        },
        {
          color: 'red',
          hour: '5pm',
          description: 'Curso de ',
        },
      ],
    },
    {
      day: 31,
      activities: [
        {
          color: 'red',
          hour: '2pm',
          description: 'Reunion ',
        },
        {
          color: 'red',
          hour: '5pm',
          description: 'Curso de ',
        },
      ],
    },
    {
      day: 31,
      activities: [
        {
          color: 'red',
          hour: '2pm',
          description: 'Reunion ',
        },
        {
          color: 'red',
          hour: '5pm',
          description: 'Curso de ',
        },
      ],
    },
    {
      day: 31,
      activities: [
        {
          color: 'red',
          hour: '2pm',
          description: 'Reunion ',
        },
        {
          color: 'red',
          hour: '5pm',
          description: 'Curso de ',
        },
      ],
    },
    {
      day: 31,
      activities: [
        {
          color: 'red',
          hour: '2pm',
          description: 'Reunion ',
        },
        {
          color: 'red',
          hour: '5pm',
          description: 'Curso de ',
        },
      ],
    },
    {
      day: 31,
      activities: [
        {
          color: 'red',
          hour: '2pm',
          description: 'Reunion ',
        },
        {
          color: 'red',
          hour: '5pm',
          description: 'Curso de ',
        },
      ],
    },
  ]

  return (
    <>
      <div className='calendarHeader'>
        Calendar
        <FontAwesomeIcon icon={faArrowLeft} />
        {month} {year}
        <FontAwesomeIcon icon={faArrowRight} />
        <FontAwesomeIcon icon={faSearch} />
        <select name='cars' id='cars' className='select'>
          <option value='volvo'>Month</option>
          <option value='saab'>Week</option>
          <option value='mercedes'>Day</option>
        </select>
      </div>
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
          {week.map((r) => (
            <Day day={r.day} activities={r.activities} />
          ))}
        </div>
        <div className='week'>
          {week.map((r) => (
            <Day day={r.day} activities={r.activities} />
          ))}
        </div>
        <div className='week'>
          {week.map((r) => (
            <Day day={r.day} activities={r.activities} />
          ))}
        </div>
        <div className='week'>
          {week.map((r) => (
            <Day day={r.day} activities={r.activities} />
          ))}
        </div>
      </div>
    </>
  )
}
