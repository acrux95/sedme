import React from 'react'
import '../../assets/styles/components/Calendar/Day.scss'

export default function Day({ day, activities }) {
  return (
    <div className='day'>
      <span className='day__dot'>
        <span className='day__number'>{day}</span>
      </span>
      <div className='activities'>
        {activities.map((d) => (
          <div className='activity'>
            <div className='activity__dot'></div>
            <div className='activity__hour'>{d.hour}</div>
            <div className='activity__description'>{d.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
