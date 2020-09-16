import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/components/Aside.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faClipboardList,
  faHatWizard,
  faCalendarAlt,
  faChartBar,
  faUsers,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons'

const Aside = () => (
  <aside>
    <ul>
      <li>
        <Link to='/'>
          <FontAwesomeIcon icon={faHome} />
          <p>Home</p>
        </Link>
      </li>
      <li>
        <Link to='/learning'>
          <FontAwesomeIcon icon={faClipboardList} />
          <p>Learning Path</p>
        </Link>
      </li>
      <li>
        <Link to='/activities'>
          <FontAwesomeIcon icon={faHatWizard} />
          <p>Activities</p>
        </Link>
      </li>
      <li>
        <Link to='/calendar'>
          <FontAwesomeIcon icon={faCalendarAlt} />
          <p>Calendar</p>
        </Link>
      </li>
      <li>
        <Link to='/goals'>
          <FontAwesomeIcon icon={faChartBar} />
          <p>Goals of the week</p>
        </Link>
      </li>
      <li>
        <Link to='/admin'>
          <FontAwesomeIcon icon={faUsers} />
          <p>Users</p>
        </Link>
      </li>
      <li>
        <Link to='/help'>
          <FontAwesomeIcon icon={faQuestionCircle} />
          <p>Help </p>
        </Link>
      </li>
    </ul>
  </aside>
)

export default Aside
