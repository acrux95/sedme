import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import Month from '../components/Calendar/Month'
import Week from '../components/Calendar/Week'
import ByDay from '../components/Calendar/ByDay'
import moment from 'moment'
import axios from 'axios'
import Modal from '../components/Modal'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRight,
  faArrowLeft,
  faSearch,
  faPlus,
} from '@fortawesome/free-solid-svg-icons'

const Calendar = (props) => {
  const date = moment()

  const [selectedDay, setSelectedDay] = useState(date.format('MM/DD/YY'))
  const [dataMonth, setDataMonth] = useState({})
  const [modal, setModal] = useState(false)
  let [type, setType] = useState('m')

  useEffect(() => {
    updateCalendarDays()
  }, [])

  const handleChange = (e) => {
    setType(e.target.value)
  }

  const leftArrow = () => {
    let newDate = moment(selectedDay).subtract(1, 'months').format('MM/DD/YY')
    setSelectedDay(newDate)
    updateCalendarDays(newDate)
  }

  const rightArrow = () => {
    let newDate = moment(selectedDay).add(1, 'months').format('MM/DD/YY')
    setSelectedDay(newDate)
    updateCalendarDays(newDate)
  }

  const nuevo = () => {
    setModal(!modal)
  }
  const getActivities = (day, month) => {
    let date = moment(selectedDay)
    date.set('date', day)
    date.set('month', month)
    let formated = date.format('YYYY-MM-DD')
    return axios.post('http://3.128.32.140:3000/api/activities/user-date', {
      userid: 52,
      startdate: formated,
    })
  }

  const updateCalendarDays = (newDate) => {
    //Dias del mes actual
    const prevDays = moment(newDate).subtract(1, 'months').daysInMonth()
    const currDays = moment(newDate).daysInMonth()
    const currentDay = moment(newDate).format('D')


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

    let activities = []
    let allPromises = []

    //Formato +++ datos Mes anterior
    const startOfMonth = moment(newDate).startOf('month').format('dddd')
    let before = daysOfWeek.findIndex((r) => r === startOfMonth)

    let startDay = prevDays - before
    let test = []
    while (prevDays > startDay) {
      startDay++
      test.push(startDay)
    }
    data = test.map((r) => {
      allPromises.push(
        getActivities(r, parseInt(moment(newDate).format('M')) - 1)
      )
      return {
        month: moment(newDate).format('MMMM'),
        day: r,
        isCurrent: false,
        isSelected: false,
        isDay: false,
      }
    })

    //Formato +++ a los datos del mes
    let days = Array.from(Array(currDays).keys())
    let xyz = days.map((r) => {
      let dayz = r + 1
      allPromises.push(getActivities(dayz, moment(newDate).format('M')))
      return {
        month: moment(newDate).format('MMMM'),
        day: dayz,
        isCurrent: true,
        isSelected: false,
        isDay: currentDay == r + 1 ? true : false,
      }
    })
    data = data.concat(xyz)

    //Formato +++ datos Sig Mes
    let dd = 1
    do {
      allPromises.push(
        getActivities(dd, parseInt(moment(newDate).format('M')) + 1)
      )
      data.push({
        month: moment(newDate).format('MMMM'),
        day: dd,
        isCurrent: false,
        isSelected: false,
        isDay: false,
      })
      dd++
    } while (data.length < 43)

    Promise.all(allPromises).then((values) => {
      data = data.map((m, key) => {
        return {
          ...m,
          activities: values[key].data.data.activities,
        }
      })
      // Se cortan las semanas del mes
      let w1 = data.slice(0, 7)
      let w2 = data.slice(7, 14)
      let w3 = data.slice(14, 21)
      let w4 = data.slice(21, 28)
      let w5 = data.slice(28, 35)
      let w6 = data.slice(35, 42)

      setDataMonth({ w1, w2, w3, w4, w5, w6 })
    })
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
            className='cursor arrow'
            onClick={leftArrow}
            icon={faArrowLeft}
          />
          <div className='month-lbl'>
            {moment(selectedDay).format('MMMM')}
            {moment(selectedDay).format('YYYY')}
          </div>
          <FontAwesomeIcon
            className='cursor arrow'
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
          <FontAwesomeIcon onClick={nuevo} icon={faPlus} />
          &nbsp;Agregar Actividad
        </button>

        <Modal visible={modal}>
          <div className='modal-content'>
            <span className='close' onClick={nuevo}>
              &times;
            </span>
            <h2>Nombre</h2>
            <span className='label'>Name</span>
            <input className='input' type='text' name='name' />
            <br />
            <span className='label'>Descripción</span>
            <input className='input' type='text' name='lastname' />
            <span className='label'>Fecha</span>
            <input className='input' type='text' name='lastname' />
            <br />
            <button className='btn'>
              Guardar
            </button>
            <br />
          </div>
        </Modal>
      </Layout>
    </>
  )
}
export default Calendar
