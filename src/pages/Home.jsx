import React, {useContext} from 'react'
import swal from 'sweetalert2'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import Example from '../components/PieChart'
import ExampleLine from '../components/LineChart'
import { GlobalContext } from '../reducers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSmileWink,
} from '@fortawesome/free-solid-svg-icons'

import '../assets/styles/components/Home.scss'

const Home = (props) => {
  const [{ loggedUser, user }, dispatch] = useContext(GlobalContext)
  return (
    <>
      <Layout path={props.location.pathname}>
        <h1 className='PageTitle'>
          Welcome back {user.username}! &nbsp;
          <FontAwesomeIcon className='main-color' icon={faSmileWink} />
        </h1>

        <div className='inisigthContainer'>
          <div className='insigth'>
            <h3>Goals completed</h3>
            <Example></Example>
          </div>

          <div className='insigth'>
            <h3>Pending courses</h3>
            <ul>
              <li>
                {' '}
                <a href=''>Curso X</a>{' '}
              </li>
              <li>
                {' '}
                <a href=''>Curso Y</a>{' '}
              </li>
              <li>
                {' '}
                <a href=''>Curso Z</a>{' '}
              </li>
            </ul>
          </div>

          <div className='insigth'>
            <h3>Course trend per week</h3>
            <ExampleLine></ExampleLine>
          </div>

          <div className='insigth'>
            <h3>Pending activities</h3>
            <ul>
              <li>
                {' '}
                <a href=''>Actividad X</a>{' '}
              </li>
              <li>
                {' '}
                <a href=''>Actividad Y</a>{' '}
              </li>
              <li>
                {' '}
                <a href=''>Actividad Z</a>{' '}
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Home
