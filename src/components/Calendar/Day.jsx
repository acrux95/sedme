import React from 'react'
import '../../assets/styles/components/Calendar/Day.scss'

export default function Day({ data }) {
  console.log(data)
  return (
    <div className={data.isCurrent ? 'day' : 'day day-secondary'}>
      <span className={data.isDay ? 'day_current' : 'day__dot'}>
        <span className='day__number'>{data.day}</span>
      </span>
      <div className='activities'>
        {data.activities.map((d) => (
          <div className='activity'>
            <div className='activity__dot green'></div>
            <div className='activity__hour'>{d.hour}</div>
            <div className='activity__description'>{d.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
