import React, { useEffect, useState } from 'react'

// import '../assets/styles/components/Calendar.scss'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from '../components/Layout'
import Month from '../components/Calendar/Month'

const Calendar = () => {
  return (
    <>
      <Layout>
        <Month />
      </Layout>
    </>
  )
}
export default Calendar
