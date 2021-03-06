import React from 'react'
import '../../assets/styles/components/Calendar/Day.scss'
import Swal from 'sweetalert2'

export default function Day({ data }) {
  const handleDay = () => {
    console.log(data)
    Swal.fire({
      title: `<strong>${data.month} ${data.day}</strong>`,
      icon: 'info',
      html: `You have ${data.activities.length} activities in the day <br>
      <table>
        <tbody>
         <tbody>
          ${data.activities.map(
            (r) => ` <tr><td>${r.name}</td><td>${r.description}</td></tr>`
          )}
          </tbody>
        </tbody>
      </table>
      `,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: 'More details',
      cancelButtonText: 'Cancel',
    })
  }
  return (
    <div
      onClick={handleDay}
      className={data.isCurrent ? 'day cursor' : 'day day-secondary cursor'}
    >
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
