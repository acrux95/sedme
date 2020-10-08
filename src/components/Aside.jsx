import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/components/Aside.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faClipboardList,
  // faHatWizard,
  faCalendarAlt,
  faChartBar,
  faUsers,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons'

const Aside = ({ path }) => {
  return (
    <aside>
      <Link to='/'>
        <h1>SEDME</h1>
      </Link>
      <ul>
        <li>
          <Link to='/' class={path === '/' ? 'active' : ''}>
            <FontAwesomeIcon icon={faHome} />
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link to='/learning' class={path === '/learning' ? 'active' : ''}>
            <FontAwesomeIcon icon={faClipboardList} />
            <p>Learning Path</p>
          </Link>
        </li>
        {/* <li>
          <Link to='/activities'>
            <FontAwesomeIcon icon={faHatWizard} />
            <p>Activities</p>
          </Link>
        </li> */}
        <li>
          <Link to='/calendar' class={path === '/calendar' ? 'active' : ''}>
            <FontAwesomeIcon icon={faCalendarAlt} />
            <p>Calendar</p>
          </Link>
        </li>
        <li>
          <Link to='/goals' class={path === '/goals' ? 'active' : ''}>
            <FontAwesomeIcon icon={faChartBar} />
            <p>Goals of the week</p>
          </Link>
        </li>
        <li>
          <Link to='/admin' class={path === '/admin' ? 'active' : ''}>
            <FontAwesomeIcon icon={faUsers} />
            <p>Users</p>
          </Link>
        </li>
        <li>
          <Link to='/help' class={path === '/help' ? 'active' : ''}>
            <FontAwesomeIcon icon={faQuestionCircle} />
            <p>Help </p>
          </Link>
        </li>
      </ul>
    </aside>
  )
}
export default Aside
