import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import Month from '../components/Calendar/Month'
import Week from '../components/Calendar/Week'
import ByDay from '../components/Calendar/ByDay'
import moment from 'moment'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRight,
  faArrowLeft,
  faSearch,
  faPlus,
} from '@fortawesome/free-solid-svg-icons'

const Calendar = (props) => {
  const date = moment()

  const [selectedDay, setSelectedDay] = useState(date)
  const [dataMonth, setDataMonth] = useState({})
  let [type, setType] = useState('m')

  useEffect(() => {
    updateCalendarDays()
  }, [])

  const handleChange = (e) => {
    setType(e.target.value)
  }
  const leftArrow = () => {
    let newDate = selectedDay.clone()
    console.log(newDate)
    setSelectedDay(newDate.subtract(1, 'months'))
  }
  const rightArrow = () => {
    let newDate = selectedDay.clone()
    console.log(newDate)
    setSelectedDay(newDate.add(1, 'months'))
  }
  const updateCalendarDays = () => {
    //Se optiene los dias del mes actual
    const prevDays = selectedDay.clone().subtract(1, 'months').daysInMonth()
    const currDays = selectedDay.daysInMonth()

    const currentDay = selectedDay.format('D')

    let data = []

    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ]
    //TODO getActivities
    let activities = [
      // {
      //   color: 'blue',
      //   hour: '2pm',
      //   description: 'Reunion de React',
      // },
      // {
      //   color: 'green',
      //   hour: '5pm',
      //   description: 'Curso de ',
      // },
    ]
    //Formato +++ datos Mes anterior
    const startOfMonth = selectedDay.clone().startOf('month').format('dddd')
    let before = daysOfWeek.findIndex((r) => r === startOfMonth)

    let startDay = prevDays - before
    let test = []
    while (prevDays + 1 > startDay) {
      startDay++
      test.push(startDay)
    }
    data = test.map((r) => {
      return {
        month: selectedDay.format('MMMM'),
        day: r,
        isCurrent: false,
        isSelected: false,
        isDay: false,
        activities: activities,
      }
    })

    //Formato +++ a los datos del mes
    let days = Array.from(Array(currDays).keys())
    let xyz = days.map((r) => {
      return {
        month: selectedDay.format('MMMM'),
        day: r + 1,
        isCurrent: true,
        isSelected: false,
        isDay: currentDay == r + 1 ? true : false,
        activities: activities,
      }
    })
    data = data.concat(xyz)

    //Formato +++ datos Sig Mes
    let dd = 1
    do {
      data.push({
        month: selectedDay.format('MMMM'),
        day: dd,
        isCurrent: false,
        isSelected: false,
        isDay: false,
        activities: activities,
      })
      dd++
    } while (data.length < 43)

    // console.log(data)

    // Se cortan las semanas del mes
    let w1 = data.slice(0, 7)
    let w2 = data.slice(7, 14)
    let w3 = data.slice(14, 21)
    let w4 = data.slice(21, 28)
    let w5 = data.slice(28, 35)
    let w6 = data.slice(35, 42)
    setDataMonth({ w1, w2, w3, w4, w5, w6 })
  }

  const renderType = () => {
    switch (type) {
      case 'd':
        return <ByDay></ByDay>
        break
      case 'm':
        return <Month data={dataMonth}></Month>
        break
      case 'w':
        return <Week />
        break
      default:
        return <span>404</span>
        break
    }
  }
  return (
    <>
      <Layout path={props.location.pathname}>
        <h1 className='PageTitle'>Calendar</h1>
        <div className='calendarHeader'>
          <FontAwesomeIcon
            className='cursor'
            onClick={leftArrow}
            icon={faArrowLeft}
          />
          <div className='month-lbl'>
            {selectedDay.format('MMMM')} {selectedDay.format('YYYY')}
          </div>
          <FontAwesomeIcon
            className='cursor'
            onClick={rightArrow}
            icon={faArrowRight}
          />
          <FontAwesomeIcon icon={faSearch} />
          {date.format('LLLL')}
          <select value={type} onChange={handleChange} className='select'>
            <option value='m'>Month</option>
            <option value='w'>Week</option>
            <option value='d'>Day</option>
          </select>
        </div>
        {renderType()}
        <button className='right btn-add'>
          <FontAwesomeIcon icon={faPlus} />
          &nbsp;Agregar Actividad
        </button>
      </Layout>
    </>
  )
}
export default Calendar
